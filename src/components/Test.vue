<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="q-pa-md bg-gradient">
        <div class="app-wrapper">
          <div class="right-sidebar bg-white shadow-2 q-pa-md scroll-area">
            <div class="text-subtitle2 text-deep-purple-7 q-mb-md">Choose Word Group:</div>
            <q-btn
              v-for="(group, index) in groupLabels"
              :key="index"
              :label="group + ' (' + groupPreview(index) + ')'"
              @click="filterGroup(index)"
              class="q-mb-sm"
              color="deep-purple-6"
              outline
              style="width: 100%"
            />
            <q-btn label="All Groups" @click="resetFilter" color="red-5" flat style="width: 100%" />
          </div>

          <div class="main-content-wrapper">
            <q-card class="q-pa-md shadow-10 rounded-borders main-card bg-indigo-1">
              <q-card-section>
                <div class="text-h5 text-center text-indigo-10">🇩🇪 German Vocabulary Trainer 🇧🇩</div>
              </q-card-section>

              <q-separator color="indigo-5" />

              <q-card-section v-if="mode === 'shuffle'" class="text-center">
                <div class="text-h6 text-dark">{{ shuffled[currentIndex].german }}</div>
                <div class="text-subtitle2 text-grey-8">{{ shuffled[currentIndex].banglaPronunciation }}</div>
                <div class="q-mt-sm text-body1">{{ shuffled[currentIndex].banglaMeaning }}</div>
              </q-card-section>

              <q-card-section v-if="mode === 'quiz-bangla'" class="text-center">
                <div class="text-subtitle1 text-purple-10 q-mb-sm">What is the Bangla meaning of:</div>
                <div class="text-h6 text-primary q-mb-md">{{ currentQuiz.german }}</div>
                <q-list bordered separator class="rounded-borders">
                  <q-item v-for="option in quizOptions" :key="option" clickable @click="checkAnswer(option)" class="q-py-sm">
                    <q-item-section class="text-body1">{{ option }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-section v-if="mode === 'quiz-german'" class="text-center">
                <div class="text-subtitle1 text-purple-10 q-mb-sm">Which German word means:</div>
                <div class="text-h6 text-primary q-mb-md">{{ currentQuiz.banglaMeaning }}</div>
                <q-list bordered separator class="rounded-borders">
                  <q-item v-for="option in quizOptions" :key="option" clickable @click="checkAnswer(option)" class="q-py-sm">
                    <q-item-section class="text-body1">{{ option }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-section class="text-center">
                <div v-if="result !== null" :class="result ? 'text-positive' : 'text-negative'" class="q-mt-md text-h6">
                  {{ result ? '✅ Correct!' : '❌ Wrong answer!' }}
                </div>
              </q-card-section>

              <q-separator class="q-my-md" color="indigo-4" />

              <q-card-actions class="justify-evenly">
                <q-btn label="Shuffle Group" @click="shuffleWords" color="primary" outline />
                <q-btn label="Shuffle All" @click="shuffleAllGroups" color="primary" flat />
                <q-btn label="Bangla ➜ German" @click="startQuiz('quiz-german')" color="purple" outline />
                <q-btn label="German ➜ Bangla" @click="startQuiz('quiz-bangla')" color="purple" outline />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import { wordGroups, groupLabels } from '@/wordGroups.js'

const words = wordGroups.flat()
const activeWords = ref([...words])
const shuffled = ref([...activeWords.value])
const currentIndex = ref(0)
const selectedGroup = ref(null)
const mode = ref('shuffle')
const currentQuiz = ref({})
const quizOptions = ref([])
const result = ref(null)

function filterGroup(index) {
  selectedGroup.value = index
  activeWords.value = [...wordGroups[index]]
  shuffleWords()
}

function resetFilter() {
  selectedGroup.value = null
  activeWords.value = [...words]
  shuffleWords()
}

function shuffleWords() {
  shuffled.value = [...activeWords.value].sort(() => Math.random() - 0.5)
  currentIndex.value = Math.floor(Math.random() * shuffled.value.length)
  mode.value = 'shuffle'
  result.value = null
}

function shuffleAllGroups() {
  resetFilter()
}

function startQuiz(type) {
  mode.value = type
  result.value = null
  const pool = activeWords.value
  currentQuiz.value = pool[Math.floor(Math.random() * pool.length)]
  if (type === 'quiz-bangla') {
    const options = [...pool.map(w => w.banglaMeaning)]
    quizOptions.value = shuffleArray([currentQuiz.value.banglaMeaning, ...getRandomItems(options, 3)])
  } else if (type === 'quiz-german') {
    const options = [...pool.map(w => w.german)]
    quizOptions.value = shuffleArray([currentQuiz.value.german, ...getRandomItems(options, 3)])
  }
}

function checkAnswer(selected) {
  if (mode.value === 'quiz-bangla') {
    result.value = selected === currentQuiz.value.banglaMeaning
  } else if (mode.value === 'quiz-german') {
    result.value = selected === currentQuiz.value.german
  }
}

function getRandomItems(arr, n) {
  const filtered = arr.filter(item => item !== (mode.value === 'quiz-bangla' ? currentQuiz.value.banglaMeaning : currentQuiz.value.german))
  return shuffleArray(filtered).slice(0, n)
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5)
}

function groupPreview(index) {
  const preview = wordGroups[index].slice(0, 2).map(w => w.banglaMeaning.split(' / ')[0]).join(', ')
  return preview + '...'
}

shuffleWords()
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #e3f2fd, #fffde7);
  min-height: 100vh;
}

.app-wrapper {
  display: flex;
  flex-direction: row;
}

.rounded-borders {
  border-radius: 12px;
}

.right-sidebar {
  width: 250px;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  right: 0;
  top: 0;
  z-index: 10;
}

.scroll-area::-webkit-scrollbar {
  width: 6px;
}

.scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.main-content-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  z-index: 5;
}

.main-card {
  width: 650px;
}
</style>

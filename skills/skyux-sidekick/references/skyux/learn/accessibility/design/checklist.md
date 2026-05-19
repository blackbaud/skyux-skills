---
Title: User interface accessibility checklist
Reference: https://developer.blackbaud.com/skyux/learn/accessibility/design/checklist
---

# User interface accessibility checklist

We use this checklist to evaluate new SKY UX patterns and components to ensure that they are as accessible as possible. The checklist covers a subset of the WCAG 2.2 success criteria that is specific to the user interface display and behaviors. It does not cover criteria related to the code or HTML markup.

<table>
  <thead>
    <tr>
      <th>
 
</th>
      <th>
Does the interface include?
</th>
      <th>
Then check that this is true:
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
1
</td>
      <td>
Text (< 18pt or < 14pt if bold)
</td>
      <td>
Contrast ratio of background to text is >= 4.5:1.

[WCAG Criterion 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)

</td>
    </tr>
    <tr>
      <td>
2
</td>
      <td>
Large text ( >=18 point or >= 14pt if bold)
</td>
      <td>
Contrast ratio of background to text is >= 3:1.

[WCAG Criterion 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)

</td>
    </tr>
    <tr>
      <td>
3
</td>
      <td>
Links within text that are not underlined
</td>
      <td>
Link color to text color contrast is >= 3:1, and links have additional visual indication when hovered and focused.

[WCAG Criterion 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)

</td>
    </tr>
    <tr>
      <td>
4
</td>
      <td>
Images or non-text content such as icons
</td>
      <td>
Images have text equivalents defined. For decorative images, indicate that they are presentational and should be ignored by assistive technology.

[WCAG Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)

</td>
    </tr>
    <tr>
      <td>
5
</td>
      <td>
Images or non-text content that invokes a function
</td>
      <td>
Images have text equivalents that communicate the function.

[WCAG Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)

</td>
    </tr>
    <tr>
      <td>
6
</td>
      <td>
Color that conveys information
</td>
      <td>
Color is not the only means of communicating the information.

[WCAG Criterion 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)

</td>
    </tr>
    <tr>
      <td>
7
</td>
      <td>
Motion or animations
</td>
      <td>
Flashing does not flash more than 3 times in any 1-second period.

[WCAG Criterion 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold)

</td>
    </tr>
    <tr>
      <td>
8
</td>
      <td>
Motion, blinking, or scrolling that starts automatically and lasts more than 5 seconds
</td>
      <td>
A mechanism exists for users to pause, stop, or hide the motion unless it is essential.

[WCAG Criterion 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)

</td>
    </tr>
    <tr>
      <td>
9
</td>
      <td>
Auto-updating content that starts automatically
</td>
      <td>
A mechanism exists for users to pause, stop, or hide the motion unless it is essential.

[WCAG Criterion 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)

</td>
    </tr>
    <tr>
      <td>
10
</td>
      <td>
Forms or input elements
</td>
      <td>
All input elements have text labels onscreen or specified off-screen.

[WCAG Criterion 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)

</td>
    </tr>
    <tr>
      <td>
11
</td>
      <td>
Required form inputs and required input formats such as date formats
</td>
      <td>
Required elements and formats are communicated visually and textually.

[WCAG Criterion 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) and [WCAG Criterion 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)

</td>
    </tr>
    <tr>
      <td>
12
</td>
      <td>
Error states and messages
</td>
      <td>
When users are notified of errors and given instructions on how to fix them, a method exists to navigate directly to errors from error messages.

[WCAG Criterion 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) and [3.3.3](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion)

</td>
    </tr>
    <tr>
      <td>
13
</td>
      <td>
Interactions that are mouse- or touch-only such as drag and drop
</td>
      <td>
Keyboard operation alternatives are noted in the design proposal.

[WCAG Criterion 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)

</td>
    </tr>
    <tr>
      <td>
14
</td>
      <td>
Interactive elements such as links, buttons, and input elements
</td>
      <td>

- On focus, no unexpected or non-browser default behaviors are specified.

  [WCAG Criterion 3.2.1](https://www.w3.org/WAI/WCAG22/Understanding/on-focus)

- On focus, additional visual indicators of the focus state are specified as necessary.

  [WCAG Criterion 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)

- On text entry or input selection, no unexpected behavior is invoked. If unexpected behavior is necessary, a warning is communicated to users ahead of time.

  [WCAG Criterion 3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input)

</td>
    </tr>
    <tr>
      <td>
15
</td>
      <td>
Page titles
</td>
      <td>
Titles are unique and describe the contents and/or purpose of the page.
</td>
    </tr>
    <tr>
      <td>
16
</td>
      <td>
Non-native HTML components such as rich Internet application widgets
</td>
      <td>
Interactions are defined for keyboard use.

(See WAI-ARIA Authoring Practices for [common keyboard widget patterns](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#fundamentalkeyboardnavigationconventions) and [principles](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#discernibleandpredictablekeyboardfocus).) [WCAG Criterion 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)

</td>
    </tr>
    <tr>
      <td>
17
</td>
      <td>
Headings
</td>
      <td>
Heading levels are specified in hierarchical order (H1-H5) and are descriptive.

[WCAG Criterion 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) and [WCAG Criterion 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)

</td>
    </tr>
  </tbody>
</table>

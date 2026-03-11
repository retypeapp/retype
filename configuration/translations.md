---
icon: globe
tags: [config]
nav:
  badge: NEW|info
---

# Translations

Use [`labels`](project.md#labels) and [`locale`](project.md#locale) to customize Retype's built-in UI text, including search labels, table of contents labels, next and previous buttons, callout titles, and much more.

The default values for all supported languages are available in the [`retype-translations`](https://github.com/retypeapp/retype-translations) project.

## How `labels` work

The table of [keys](#keys) below lists all the labels that can be customized in Retype.

If you see a label in your project that you want to customize, check the table below to find the corresponding key.

Label key lookup is case-insensitive and treats `_` and `-` as equivalent. For example, `Search_Input_Placeholder` and `search_input_placeholder` and `search-input-placeholder` are all treated as the same key.

Label collections are also case-insensitive, so `fr` and `FR` refer to the collection of keys. In this case, French language translations. 

### Default labels

Use `labels.default` to set project-wide fallback values and to override the English defaults.

```yml
labels:
  default:
    search_input_placeholder: Search the docs
    toc_contents_label: On this page
```

### Locale-specific labels

When [`locale`](project.md#locale) is set to a supported built-in locale such as `fr`, Retype loads the built-in translated strings for that locale and then applies any matching `labels.<locale>` overrides.

```yml
locale: fr

labels:
  default:
    toolbar_filter_placeholder: Filter docs

  fr:
    search_input_placeholder: Rechercher dans la documentation
    toc_contents_label: Sur cette page
```

One subtle point matters here: `labels.default` does not automatically replace built-in non-English translations. If a supported locale already has a built-in translated value, that value remains in use unless you override the same key in `labels.<locale>`.

### Custom groups

You can also set `locale` to a custom value and provide a matching group in `labels`. This is useful for partner portals, internal docs, or branded variants that need wording different from the built-in locales.

```yml
locale: partner

labels:
  default:
    search_input_placeholder: Search docs

  partner:
    search_input_placeholder: Search partner docs
    toc_contents_label: In this section
```

With a custom locale, Retype uses the matching collection as the active locale source and falls back to `labels.default` when needed.

## Template access

Using the [template](/templating/project-properties.md) syntax, all label values are available from the `project.labels` object.

The following sample demonstrates how to get the label value for a specific key:

{%{
```
{{ project.labels["Search_NoResults_Label"] }}
```
}%}

The above outputs the value: `{{ project.labels["Search_NoResults_Label"] }}`

You can also access a specific locale using the following syntax:

{%{
```
{{ project.labels.fr["Search_NoResults_Label"] }}
```
}%}

The above outputs the value: `{{ project.labels.fr["Search_NoResults_Label"] }}`

## Keys

The following table lists all the keys and default values that can be customized in a Retype project. The `es` (Spanish) values are also provided for reference.

| Key | `default` (English) | `es` (Spanish) |
| --- | --- | --- |
| `Callout_Caution_Title` | {{ project.labels["Callout_Caution_Title"] }} | {{ project.labels.es["Callout_Caution_Title"] }} |
| `Callout_Danger_Title` | {{ project.labels["Callout_Danger_Title"] }} | {{ project.labels.es["Callout_Danger_Title"] }} |
| `Callout_Info_Title` | {{ project.labels["Callout_Info_Title"] }} | {{ project.labels.es["Callout_Info_Title"] }} |
| `Callout_Note_Title` | {{ project.labels["Callout_Note_Title"] }} | {{ project.labels.es["Callout_Note_Title"] }} |
| `Callout_Tip_Title` | {{ project.labels["Callout_Tip_Title"] }} | {{ project.labels.es["Callout_Tip_Title"] }} |
| `API_AccessFilter_Label` | {{ project.labels["API_AccessFilter_Label"] }} | {{ project.labels.es["API_AccessFilter_Label"] }} |
| `API_ClassType_Name` | {{ project.labels["API_ClassType_Name"] }} | {{ project.labels.es["API_ClassType_Name"] }} |
| `API_CopiedAckHint_Label` | {{ project.labels["API_CopiedAckHint_Label"] }} | {{ project.labels.es["API_CopiedAckHint_Label"] }} |
| `API_CopyHint_Label` | {{ project.labels["API_CopyHint_Label"] }} | {{ project.labels.es["API_CopyHint_Label"] }} |
| `API_CopyLinkHint_Label` | {{ project.labels["API_CopyLinkHint_Label"] }} | {{ project.labels.es["API_CopyLinkHint_Label"] }} |
| `API_CopyNameHint_Label` | {{ project.labels["API_CopyNameHint_Label"] }} | {{ project.labels.es["API_CopyNameHint_Label"] }} |
| `API_DefaultParameterValue_Label` | {{ project.labels["API_DefaultParameterValue_Label"] }} | {{ project.labels.es["API_DefaultParameterValue_Label"] }} |
| `API_DelegateType_Name` | {{ project.labels["API_DelegateType_Name"] }} | {{ project.labels.es["API_DelegateType_Name"] }} |
| `API_EnumType_Name` | {{ project.labels["API_EnumType_Name"] }} | {{ project.labels.es["API_EnumType_Name"] }} |
| `API_EventGroup_Title` | {{ project.labels["API_EventGroup_Title"] }} | {{ project.labels.es["API_EventGroup_Title"] }} |
| `API_FieldGroup_Title` | {{ project.labels["API_FieldGroup_Title"] }} | {{ project.labels.es["API_FieldGroup_Title"] }} |
| `API_InheritedFilter_Label` | {{ project.labels["API_InheritedFilter_Label"] }} | {{ project.labels.es["API_InheritedFilter_Label"] }} |
| `API_InterfaceType_Name` | {{ project.labels["API_InterfaceType_Name"] }} | {{ project.labels.es["API_InterfaceType_Name"] }} |
| `API_MethodGroup_Title` | {{ project.labels["API_MethodGroup_Title"] }} | {{ project.labels.es["API_MethodGroup_Title"] }} |
| `API_MoreDropdownItems_Label` | {{ project.labels["API_MoreDropdownItems_Label"] }} | {{ project.labels.es["API_MoreDropdownItems_Label"] }} |
| `API_MoreOverloads_Label` | {{ project.labels["API_MoreOverloads_Label"] }} | {{ project.labels.es["API_MoreOverloads_Label"] }} |
| `API_OptionalParameter_Label` | {{ project.labels["API_OptionalParameter_Label"] }} | {{ project.labels.es["API_OptionalParameter_Label"] }} |
| `API_ParameterSection_Label` | {{ project.labels["API_ParameterSection_Label"] }} | {{ project.labels.es["API_ParameterSection_Label"] }} |
| `API_PropertyGroup_Title` | {{ project.labels["API_PropertyGroup_Title"] }} | {{ project.labels.es["API_PropertyGroup_Title"] }} |
| `API_ProtectedAccess_Name` | {{ project.labels["API_ProtectedAccess_Name"] }} | {{ project.labels.es["API_ProtectedAccess_Name"] }} |
| `API_PublicAccess_Name` | {{ project.labels["API_PublicAccess_Name"] }} | {{ project.labels.es["API_PublicAccess_Name"] }} |
| `API_RecordType_Name` | {{ project.labels["API_RecordType_Name"] }} | {{ project.labels.es["API_RecordType_Name"] }} |
| `API_SecurityAlert_Title` | {{ project.labels["API_SecurityAlert_Title"] }} | {{ project.labels.es["API_SecurityAlert_Title"] }} |
| `API_SecurityNoteAlert_Title` | {{ project.labels["API_SecurityNoteAlert_Title"] }} | {{ project.labels.es["API_SecurityNoteAlert_Title"] }} |
| `API_SignatureSection_Label` | {{ project.labels["API_SignatureSection_Label"] }} | {{ project.labels.es["API_SignatureSection_Label"] }} |
| `API_StructType_Name` | {{ project.labels["API_StructType_Name"] }} | {{ project.labels.es["API_StructType_Name"] }} |
| `API_TypeHierarchyPanel_Title` | {{ project.labels["API_TypeHierarchyPanel_Title"] }} | {{ project.labels.es["API_TypeHierarchyPanel_Title"] }} |
| `ContentFooter_NewerButton_Label` | {{ project.labels["ContentFooter_NewerButton_Label"] }} | {{ project.labels.es["ContentFooter_NewerButton_Label"] }} |
| `ContentFooter_NextButton_Label` | {{ project.labels["ContentFooter_NextButton_Label"] }} | {{ project.labels.es["ContentFooter_NextButton_Label"] }} |
| `ContentFooter_OlderButton_Label` | {{ project.labels["ContentFooter_OlderButton_Label"] }} | {{ project.labels.es["ContentFooter_OlderButton_Label"] }} |
| `ContentFooter_PrevButton_Label` | {{ project.labels["ContentFooter_PrevButton_Label"] }} | {{ project.labels.es["ContentFooter_PrevButton_Label"] }} |
| `ContentFooter_LastUpdated_Label` | {{ project.labels["ContentFooter_LastUpdated_Label"] }} | {{ project.labels.es["ContentFooter_LastUpdated_Label"] }} |
| `Editor_SaveButton_Label` | {{ project.labels["Editor_SaveButton_Label"] }} | {{ project.labels.es["Editor_SaveButton_Label"] }} |
| `Filter_NoMembersFound_Label` | {{ project.labels["Filter_NoMembersFound_Label"] }} | {{ project.labels.es["Filter_NoMembersFound_Label"] }} |
| `History_AgoTime_Label` | {{ project.labels["History_AgoTime_Label"] }} | {{ project.labels.es["History_AgoTime_Label"] }} |
| `History_ClearLink_Label` | {{ project.labels["History_ClearLink_Label"] }} | {{ project.labels.es["History_ClearLink_Label"] }} |
| `History_DayTime_Label` | {{ project.labels["History_DayTime_Label"] }} | {{ project.labels.es["History_DayTime_Label"] }} |
| `History_HourTime_Label` | {{ project.labels["History_HourTime_Label"] }} | {{ project.labels.es["History_HourTime_Label"] }} |
| `History_JustNowTime_Label` | {{ project.labels["History_JustNowTime_Label"] }} | {{ project.labels.es["History_JustNowTime_Label"] }} |
| `History_MinuteTime_Label` | {{ project.labels["History_MinuteTime_Label"] }} | {{ project.labels.es["History_MinuteTime_Label"] }} |
| `History_MonthTime_Label` | {{ project.labels["History_MonthTime_Label"] }} | {{ project.labels.es["History_MonthTime_Label"] }} |
| `History_NoHistory_Label` | {{ project.labels["History_NoHistory_Label"] }} | {{ project.labels.es["History_NoHistory_Label"] }} |
| `History_SecondTime_Label` | {{ project.labels["History_SecondTime_Label"] }} | {{ project.labels.es["History_SecondTime_Label"] }} |
| `History_Title_Label` | {{ project.labels["History_Title_Label"] }} | {{ project.labels.es["History_Title_Label"] }} |
| `History_YearTime_Label` | {{ project.labels["History_YearTime_Label"] }} | {{ project.labels.es["History_YearTime_Label"] }} |
| `Note_Question_Title` | {{ project.labels["Note_Question_Title"] }} | {{ project.labels.es["Note_Question_Title"] }} |
| `Note_Caution_Title` | {{ project.labels["Note_Caution_Title"] }} | {{ project.labels.es["Note_Caution_Title"] }} |
| `Note_Important_Title` | {{ project.labels["Note_Important_Title"] }} | {{ project.labels.es["Note_Important_Title"] }} |
| `Note_Note_Title` | {{ project.labels["Note_Note_Title"] }} | {{ project.labels.es["Note_Note_Title"] }} |
| `Note_Tip_Title` | {{ project.labels["Note_Tip_Title"] }} | {{ project.labels.es["Note_Tip_Title"] }} |
| `Note_Warning_Title` | {{ project.labels["Note_Warning_Title"] }} | {{ project.labels.es["Note_Warning_Title"] }} |
| `PageMeta_By_Label` | {{ project.labels["PageMeta_By_Label"] }} | {{ project.labels.es["PageMeta_By_Label"] }} |
| `PageMeta_In_Label` | {{ project.labels["PageMeta_In_Label"] }} | {{ project.labels.es["PageMeta_In_Label"] }} |
| `PageMeta_Published_Label` | {{ project.labels["PageMeta_Published_Label"] }} | {{ project.labels.es["PageMeta_Published_Label"] }} |
| `Panel_Title_Details` | {{ project.labels["Panel_Title_Details"] }} | {{ project.labels.es["Panel_Title_Details"] }} |
| `Page_404_GoToHomeButton_Label` | {{ project.labels["Page_404_GoToHomeButton_Label"] }} | {{ project.labels.es["Page_404_GoToHomeButton_Label"] }} |
| `Page_404_MessageBody` | {{ project.labels["Page_404_MessageBody"] }} | {{ project.labels.es["Page_404_MessageBody"] }} |
| `Page_404_MessageTitle` | {{ project.labels["Page_404_MessageTitle"] }} | {{ project.labels.es["Page_404_MessageTitle"] }} |
| `Page_404_Title` | {{ project.labels["Page_404_Title"] }} | {{ project.labels.es["Page_404_Title"] }} |
| `Page_Blog_Title` | {{ project.labels["Page_Blog_Title"] }} | {{ project.labels.es["Page_Blog_Title"] }} |
| `Page_Page` | {{ project.labels["Page_Page"] }} | {{ project.labels.es["Page_Page"] }} |
| `Page_Categories_Title` | {{ project.labels["Page_Categories_Title"] }} | {{ project.labels.es["Page_Categories_Title"] }} |
| `Page_Category_Categories_Label` | {{ project.labels["Page_Category_Categories_Label"] }} | {{ project.labels.es["Page_Category_Categories_Label"] }} |
| `Page_Category_SeeAll_Label` | {{ project.labels["Page_Category_SeeAll_Label"] }} | {{ project.labels.es["Page_Category_SeeAll_Label"] }} |
| `Page_Category_Title` | {{ project.labels["Page_Category_Title"] }} | {{ project.labels.es["Page_Category_Title"] }} |
| `Page_Docs_Title` | {{ project.labels["Page_Docs_Title"] }} | {{ project.labels.es["Page_Docs_Title"] }} |
| `Page_Tags_Title` | {{ project.labels["Page_Tags_Title"] }} | {{ project.labels.es["Page_Tags_Title"] }} |
| `Page_Tag_SeeAll_Label` | {{ project.labels["Page_Tag_SeeAll_Label"] }} | {{ project.labels.es["Page_Tag_SeeAll_Label"] }} |
| `Page_Tag_Tags_Label` | {{ project.labels["Page_Tag_Tags_Label"] }} | {{ project.labels.es["Page_Tag_Tags_Label"] }} |
| `Page_Tag_Title` | {{ project.labels["Page_Tag_Title"] }} | {{ project.labels.es["Page_Tag_Title"] }} |
| `Page_Welcome_Title` | {{ project.labels["Page_Welcome_Title"] }} | {{ project.labels.es["Page_Welcome_Title"] }} |
| `Plugin_Edit_EditThisPage_Label` | {{ project.labels["Plugin_Edit_EditThisPage_Label"] }} | {{ project.labels.es["Plugin_Edit_EditThisPage_Label"] }} |
| `PrivatePage_Password_Label` | {{ project.labels["PrivatePage_Password_Label"] }} | {{ project.labels.es["PrivatePage_Password_Label"] }} |
| `PrivatePage_Password_Title` | {{ project.labels["PrivatePage_Password_Title"] }} | {{ project.labels.es["PrivatePage_Password_Title"] }} |
| `PrivatePage_Password_Unlock` | {{ project.labels["PrivatePage_Password_Unlock"] }} | {{ project.labels.es["PrivatePage_Password_Unlock"] }} |
| `PrivatePage_Password_Wrong` | {{ project.labels["PrivatePage_Password_Wrong"] }} | {{ project.labels.es["PrivatePage_Password_Wrong"] }} |
| `Project_DefaultTitle_Value` | {{ project.labels["Project_DefaultTitle_Value"] }} | {{ project.labels.es["Project_DefaultTitle_Value"] }} |
| `Search_Input_Placeholder` | {{ project.labels["Search_Input_Placeholder"] }} | {{ project.labels.es["Search_Input_Placeholder"] }} |
| `Search_Navigate_Label` | {{ project.labels["Search_Navigate_Label"] }} | {{ project.labels.es["Search_Navigate_Label"] }} |
| `Search_NoResults_Label` | {{ project.labels["Search_NoResults_Label"] }} | {{ project.labels.es["Search_NoResults_Label"] }} |
| `Search_Navigate_Label` | {{ project.labels["Search_Navigate_Label"] }} | {{ project.labels.es["Search_Navigate_Label"] }} |
| `Search_Open_Label` | {{ project.labels["Search_Open_Label"] }} | {{ project.labels.es["Search_Open_Label"] }} |
| `Search_TopResults_Label` | {{ project.labels["Search_TopResults_Label"] }} | {{ project.labels.es["Search_TopResults_Label"] }} |
| `Search_Result_Singular_Label` | {{ project.labels["Search_Result_Singular_Label"] }} | {{ project.labels.es["Search_Result_Singular_Label"] }} |
| `Search_Result_Plural_Label` | {{ project.labels["Search_Result_Plural_Label"] }} | {{ project.labels.es["Search_Result_Plural_Label"] }} |
| `Sidebar_Filter_Placeholder` | {{ project.labels["Sidebar_Filter_Placeholder"] }} | {{ project.labels.es["Sidebar_Filter_Placeholder"] }} |
| `Toc_Contents_Label` | {{ project.labels["Toc_Contents_Label"] }} | {{ project.labels.es["Toc_Contents_Label"] }} |
| `Toc_RelatedClasses_Label` | {{ project.labels["Toc_RelatedClasses_Label"] }} | {{ project.labels.es["Toc_RelatedClasses_Label"] }} |
| `Toolbar_Access_Placeholder` | {{ project.labels["Toolbar_Access_Placeholder"] }} | {{ project.labels.es["Toolbar_Access_Placeholder"] }} |
| `Toolbar_Filters_Placeholder` | {{ project.labels["Toolbar_Filters_Placeholder"] }} | {{ project.labels.es["Toolbar_Filters_Placeholder"] }} |
| `Toolbar_Filter_Placeholder` | {{ project.labels["Toolbar_Filter_Placeholder"] }} | {{ project.labels.es["Toolbar_Filter_Placeholder"] }} |
| `Text_Light` | {{ project.labels["Text_Light"] }} | {{ project.labels.es["Text_Light"] }} |
| `Text_Dark` | {{ project.labels["Text_Dark"] }} | {{ project.labels.es["Text_Dark"] }} |
| `Text_System` | {{ project.labels["Text_System"] }} | {{ project.labels.es["Text_System"] }} |
| `Backlinks_Title` | {{ project.labels["Backlinks_Title"] }} | {{ project.labels.es["Backlinks_Title"] }} |
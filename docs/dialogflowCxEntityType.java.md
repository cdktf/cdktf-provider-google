# `google_dialogflow_cx_entity_type`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_entity_type`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type).

# `dialogflowCxEntityType` Submodule <a name="`dialogflowCxEntityType` Submodule" id="@cdktf/provider-google.dialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxEntityType <a name="DialogflowCxEntityType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityType;

DialogflowCxEntityType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .entities(IResolvable)
    .entities(java.util.List<DialogflowCxEntityTypeEntities>)
    .kind(java.lang.String)
//  .autoExpansionMode(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .excludedPhrases(IResolvable)
//  .excludedPhrases(java.util.List<DialogflowCxEntityTypeExcludedPhrases>)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .parent(java.lang.String)
//  .redact(java.lang.Boolean)
//  .redact(IResolvable)
//  .timeouts(DialogflowCxEntityTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.excludedPhrases">excludedPhrases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>></code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#display_name DialogflowCxEntityType#display_name}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.entities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#entities DialogflowCxEntityType#entities}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Indicates whether the entity type can be automatically expanded.

KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#kind DialogflowCxEntityType#kind}

---

##### `autoExpansionMode`<sup>Optional</sup> <a name="autoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.autoExpansionMode"></a>

- *Type:* java.lang.String

Represents kinds of entities.

AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#auto_expansion_mode DialogflowCxEntityType#auto_expansion_mode}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.enableFuzzyExtraction"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#enable_fuzzy_extraction DialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `excludedPhrases`<sup>Optional</sup> <a name="excludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.excludedPhrases"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>>

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#excluded_phrases DialogflowCxEntityType#excluded_phrases}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#language_code DialogflowCxEntityType#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#parent DialogflowCxEntityType#parent}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.redact"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#redact DialogflowCxEntityType#redact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#timeouts DialogflowCxEntityType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases">putExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode">resetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction">resetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases">resetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact">resetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEntities` <a name="putEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities"></a>

```java
public void putEntities(IResolvable OR java.util.List<DialogflowCxEntityTypeEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>>

---

##### `putExcludedPhrases` <a name="putExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases"></a>

```java
public void putExcludedPhrases(IResolvable OR java.util.List<DialogflowCxEntityTypeExcludedPhrases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts"></a>

```java
public void putTimeouts(DialogflowCxEntityTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

---

##### `resetAutoExpansionMode` <a name="resetAutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode"></a>

```java
public void resetAutoExpansionMode()
```

##### `resetEnableFuzzyExtraction` <a name="resetEnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```java
public void resetEnableFuzzyExtraction()
```

##### `resetExcludedPhrases` <a name="resetExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases"></a>

```java
public void resetExcludedPhrases()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent"></a>

```java
public void resetParent()
```

##### `resetRedact` <a name="resetRedact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact"></a>

```java
public void resetRedact()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityType;

DialogflowCxEntityType.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityType;

DialogflowCxEntityType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityType;

DialogflowCxEntityType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases">excludedPhrases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput">autoExpansionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput">enableFuzzyExtractionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput">entitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput">excludedPhrasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput">redactInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities"></a>

```java
public DialogflowCxEntityTypeEntitiesList getEntities();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a>

---

##### `excludedPhrases`<sup>Required</sup> <a name="excludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases"></a>

```java
public DialogflowCxEntityTypeExcludedPhrasesList getExcludedPhrases();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts"></a>

```java
public DialogflowCxEntityTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `autoExpansionModeInput`<sup>Optional</sup> <a name="autoExpansionModeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput"></a>

```java
public java.lang.String getAutoExpansionModeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtractionInput`<sup>Optional</sup> <a name="enableFuzzyExtractionInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```java
public java.lang.Object getEnableFuzzyExtractionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput"></a>

```java
public java.lang.Object getEntitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>>

---

##### `excludedPhrasesInput`<sup>Optional</sup> <a name="excludedPhrasesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput"></a>

```java
public java.lang.Object getExcludedPhrasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput"></a>

```java
public java.lang.Object getRedactInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `autoExpansionMode`<sup>Required</sup> <a name="autoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode"></a>

```java
public java.lang.String getAutoExpansionMode();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtraction`<sup>Required</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact"></a>

```java
public java.lang.Object getRedact();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxEntityTypeConfig <a name="DialogflowCxEntityTypeConfig" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeConfig;

DialogflowCxEntityTypeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .entities(IResolvable)
    .entities(java.util.List<DialogflowCxEntityTypeEntities>)
    .kind(java.lang.String)
//  .autoExpansionMode(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .excludedPhrases(IResolvable)
//  .excludedPhrases(java.util.List<DialogflowCxEntityTypeExcludedPhrases>)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .parent(java.lang.String)
//  .redact(java.lang.Boolean)
//  .redact(IResolvable)
//  .timeouts(DialogflowCxEntityTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases">excludedPhrases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>></code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#display_name DialogflowCxEntityType#display_name}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities"></a>

```java
public java.lang.Object getEntities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#entities DialogflowCxEntityType#entities}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Indicates whether the entity type can be automatically expanded.

KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#kind DialogflowCxEntityType#kind}

---

##### `autoExpansionMode`<sup>Optional</sup> <a name="autoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```java
public java.lang.String getAutoExpansionMode();
```

- *Type:* java.lang.String

Represents kinds of entities.

AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#auto_expansion_mode DialogflowCxEntityType#auto_expansion_mode}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#enable_fuzzy_extraction DialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `excludedPhrases`<sup>Optional</sup> <a name="excludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```java
public java.lang.Object getExcludedPhrases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>>

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#excluded_phrases DialogflowCxEntityType#excluded_phrases}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#language_code DialogflowCxEntityType#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#parent DialogflowCxEntityType#parent}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact"></a>

```java
public java.lang.Object getRedact();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#redact DialogflowCxEntityType#redact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts"></a>

```java
public DialogflowCxEntityTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#timeouts DialogflowCxEntityType#timeouts}

---

### DialogflowCxEntityTypeEntities <a name="DialogflowCxEntityTypeEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeEntities;

DialogflowCxEntityTypeEntities.builder()
//  .synonyms(java.util.List<java.lang.String>)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value">value</a></code> | <code>java.lang.String</code> | The primary value associated with this entity entry. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#synonyms DialogflowCxEntityType#synonyms}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeExcludedPhrases <a name="DialogflowCxEntityTypeExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeExcludedPhrases;

DialogflowCxEntityTypeExcludedPhrases.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value">value</a></code> | <code>java.lang.String</code> | The word or phrase to be excluded. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeTimeouts <a name="DialogflowCxEntityTypeTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeTimeouts;

DialogflowCxEntityTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxEntityTypeEntitiesList <a name="DialogflowCxEntityTypeEntitiesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeEntitiesList;

new DialogflowCxEntityTypeEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get"></a>

```java
public DialogflowCxEntityTypeEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a>>

---


### DialogflowCxEntityTypeEntitiesOutputReference <a name="DialogflowCxEntityTypeEntitiesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeEntitiesOutputReference;

new DialogflowCxEntityTypeEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities">DialogflowCxEntityTypeEntities</a> OR com.hashicorp.cdktf.IResolvable

---


### DialogflowCxEntityTypeExcludedPhrasesList <a name="DialogflowCxEntityTypeExcludedPhrasesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeExcludedPhrasesList;

new DialogflowCxEntityTypeExcludedPhrasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```java
public DialogflowCxEntityTypeExcludedPhrasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a>>

---


### DialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="DialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeExcludedPhrasesOutputReference;

new DialogflowCxEntityTypeExcludedPhrasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases">DialogflowCxEntityTypeExcludedPhrases</a> OR com.hashicorp.cdktf.IResolvable

---


### DialogflowCxEntityTypeTimeoutsOutputReference <a name="DialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_entity_type.DialogflowCxEntityTypeTimeoutsOutputReference;

new DialogflowCxEntityTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




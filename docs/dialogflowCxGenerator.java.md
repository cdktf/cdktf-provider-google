# `dialogflowCxGenerator` Submodule <a name="`dialogflowCxGenerator` Submodule" id="@cdktf/provider-google.dialogflowCxGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxGenerator <a name="DialogflowCxGenerator" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator google_dialogflow_cx_generator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGenerator;

DialogflowCxGenerator.Builder.create(Construct scope, java.lang.String id)
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
    .promptText(DialogflowCxGeneratorPromptText)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .llmModelSettings(DialogflowCxGeneratorLlmModelSettings)
//  .modelParameter(DialogflowCxGeneratorModelParameter)
//  .parent(java.lang.String)
//  .placeholders(IResolvable)
//  .placeholders(java.util.List<DialogflowCxGeneratorPlaceholders>)
//  .timeouts(DialogflowCxGeneratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.placeholders">placeholders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>></code> | placeholders block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#display_name DialogflowCxGenerator#display_name}

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.promptText"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#language_code DialogflowCxGenerator#language_code}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#llm_model_settings DialogflowCxGenerator#llm_model_settings}

---

##### `modelParameter`<sup>Optional</sup> <a name="modelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.modelParameter"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#model_parameter DialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#parent DialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.placeholders"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>>

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#placeholders DialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#timeouts DialogflowCxGenerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter">putModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders">putPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText">putPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter">resetModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders">resetPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings"></a>

```java
public void putLlmModelSettings(DialogflowCxGeneratorLlmModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---

##### `putModelParameter` <a name="putModelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter"></a>

```java
public void putModelParameter(DialogflowCxGeneratorModelParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---

##### `putPlaceholders` <a name="putPlaceholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders"></a>

```java
public void putPlaceholders(IResolvable OR java.util.List<DialogflowCxGeneratorPlaceholders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>>

---

##### `putPromptText` <a name="putPromptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText"></a>

```java
public void putPromptText(DialogflowCxGeneratorPromptText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts"></a>

```java
public void putTimeouts(DialogflowCxGeneratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings"></a>

```java
public void resetLlmModelSettings()
```

##### `resetModelParameter` <a name="resetModelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter"></a>

```java
public void resetModelParameter()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent"></a>

```java
public void resetParent()
```

##### `resetPlaceholders` <a name="resetPlaceholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders"></a>

```java
public void resetPlaceholders()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxGenerator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGenerator;

DialogflowCxGenerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGenerator;

DialogflowCxGenerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGenerator;

DialogflowCxGenerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGenerator;

DialogflowCxGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DialogflowCxGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DialogflowCxGenerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DialogflowCxGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DialogflowCxGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders">placeholders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput">modelParameterInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput">placeholdersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput">promptTextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings"></a>

```java
public DialogflowCxGeneratorLlmModelSettingsOutputReference getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a>

---

##### `modelParameter`<sup>Required</sup> <a name="modelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter"></a>

```java
public DialogflowCxGeneratorModelParameterOutputReference getModelParameter();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `placeholders`<sup>Required</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders"></a>

```java
public DialogflowCxGeneratorPlaceholdersList getPlaceholders();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a>

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText"></a>

```java
public DialogflowCxGeneratorPromptTextOutputReference getPromptText();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts"></a>

```java
public DialogflowCxGeneratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput"></a>

```java
public DialogflowCxGeneratorLlmModelSettings getLlmModelSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---

##### `modelParameterInput`<sup>Optional</sup> <a name="modelParameterInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput"></a>

```java
public DialogflowCxGeneratorModelParameter getModelParameterInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `placeholdersInput`<sup>Optional</sup> <a name="placeholdersInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput"></a>

```java
public java.lang.Object getPlaceholdersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>>

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput"></a>

```java
public DialogflowCxGeneratorPromptText getPromptTextInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxGeneratorConfig <a name="DialogflowCxGeneratorConfig" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorConfig;

DialogflowCxGeneratorConfig.builder()
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
    .promptText(DialogflowCxGeneratorPromptText)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .llmModelSettings(DialogflowCxGeneratorLlmModelSettings)
//  .modelParameter(DialogflowCxGeneratorModelParameter)
//  .parent(java.lang.String)
//  .placeholders(IResolvable)
//  .placeholders(java.util.List<DialogflowCxGeneratorPlaceholders>)
//  .timeouts(DialogflowCxGeneratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders">placeholders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>></code> | placeholders block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#display_name DialogflowCxGenerator#display_name}

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText"></a>

```java
public DialogflowCxGeneratorPromptText getPromptText();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#language_code DialogflowCxGenerator#language_code}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings"></a>

```java
public DialogflowCxGeneratorLlmModelSettings getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#llm_model_settings DialogflowCxGenerator#llm_model_settings}

---

##### `modelParameter`<sup>Optional</sup> <a name="modelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter"></a>

```java
public DialogflowCxGeneratorModelParameter getModelParameter();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#model_parameter DialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#parent DialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders"></a>

```java
public java.lang.Object getPlaceholders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>>

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#placeholders DialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts"></a>

```java
public DialogflowCxGeneratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#timeouts DialogflowCxGenerator#timeouts}

---

### DialogflowCxGeneratorLlmModelSettings <a name="DialogflowCxGeneratorLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorLlmModelSettings;

DialogflowCxGeneratorLlmModelSettings.builder()
//  .model(java.lang.String)
//  .promptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText">promptText</a></code> | <code>java.lang.String</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#model DialogflowCxGenerator#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

### DialogflowCxGeneratorModelParameter <a name="DialogflowCxGeneratorModelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorModelParameter;

DialogflowCxGeneratorModelParameter.builder()
//  .maxDecodeSteps(java.lang.Number)
//  .temperature(java.lang.Number)
//  .topK(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>java.lang.Number</code> | The maximum number of tokens to generate. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | The temperature used for sampling. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK">topK</a></code> | <code>java.lang.Number</code> | If set, the sampling process in each step is limited to the topK tokens with highest probabilities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP">topP</a></code> | <code>java.lang.Number</code> | If set, only the tokens comprising the top topP probability mass are considered. |

---

##### `maxDecodeSteps`<sup>Optional</sup> <a name="maxDecodeSteps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps"></a>

```java
public java.lang.Number getMaxDecodeSteps();
```

- *Type:* java.lang.Number

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#max_decode_steps DialogflowCxGenerator#max_decode_steps}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#temperature DialogflowCxGenerator#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#top_k DialogflowCxGenerator#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#top_p DialogflowCxGenerator#top_p}

---

### DialogflowCxGeneratorPlaceholders <a name="DialogflowCxGeneratorPlaceholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorPlaceholders;

DialogflowCxGeneratorPlaceholders.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id">id</a></code> | <code>java.lang.String</code> | Unique ID used to map custom placeholder to parameters in fulfillment. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name">name</a></code> | <code>java.lang.String</code> | Custom placeholder value in the prompt text. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique ID used to map custom placeholder to parameters in fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Custom placeholder value in the prompt text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#name DialogflowCxGenerator#name}

---

### DialogflowCxGeneratorPromptText <a name="DialogflowCxGeneratorPromptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorPromptText;

DialogflowCxGeneratorPromptText.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text">text</a></code> | <code>java.lang.String</code> | Text input which can be used for prompt or banned phrases. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#text DialogflowCxGenerator#text}

---

### DialogflowCxGeneratorTimeouts <a name="DialogflowCxGeneratorTimeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorTimeouts;

DialogflowCxGeneratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxGeneratorLlmModelSettingsOutputReference <a name="DialogflowCxGeneratorLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorLlmModelSettingsOutputReference;

new DialogflowCxGeneratorLlmModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText"></a>

```java
public void resetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput"></a>

```java
public java.lang.String getPromptTextInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue"></a>

```java
public DialogflowCxGeneratorLlmModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---


### DialogflowCxGeneratorModelParameterOutputReference <a name="DialogflowCxGeneratorModelParameterOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorModelParameterOutputReference;

new DialogflowCxGeneratorModelParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps">resetMaxDecodeSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDecodeSteps` <a name="resetMaxDecodeSteps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps"></a>

```java
public void resetMaxDecodeSteps()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopK` <a name="resetTopK" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK"></a>

```java
public void resetTopK()
```

##### `resetTopP` <a name="resetTopP" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput">maxDecodeStepsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput">topKInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK">topK</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDecodeStepsInput`<sup>Optional</sup> <a name="maxDecodeStepsInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput"></a>

```java
public java.lang.Number getMaxDecodeStepsInput();
```

- *Type:* java.lang.Number

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput"></a>

```java
public java.lang.Number getTopKInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxDecodeSteps`<sup>Required</sup> <a name="maxDecodeSteps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps"></a>

```java
public java.lang.Number getMaxDecodeSteps();
```

- *Type:* java.lang.Number

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue"></a>

```java
public DialogflowCxGeneratorModelParameter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---


### DialogflowCxGeneratorPlaceholdersList <a name="DialogflowCxGeneratorPlaceholdersList" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorPlaceholdersList;

new DialogflowCxGeneratorPlaceholdersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get"></a>

```java
public DialogflowCxGeneratorPlaceholdersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>>

---


### DialogflowCxGeneratorPlaceholdersOutputReference <a name="DialogflowCxGeneratorPlaceholdersOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorPlaceholdersOutputReference;

new DialogflowCxGeneratorPlaceholdersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>

---


### DialogflowCxGeneratorPromptTextOutputReference <a name="DialogflowCxGeneratorPromptTextOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorPromptTextOutputReference;

new DialogflowCxGeneratorPromptTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue"></a>

```java
public DialogflowCxGeneratorPromptText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---


### DialogflowCxGeneratorTimeoutsOutputReference <a name="DialogflowCxGeneratorTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_generator.DialogflowCxGeneratorTimeoutsOutputReference;

new DialogflowCxGeneratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---




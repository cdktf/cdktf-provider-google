# `geminiLoggingSetting` Submodule <a name="`geminiLoggingSetting` Submodule" id="@cdktf/provider-google.geminiLoggingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiLoggingSetting <a name="GeminiLoggingSetting" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting google_gemini_logging_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSetting;

GeminiLoggingSetting.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .loggingSettingId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logMetadata(java.lang.Boolean)
//  .logMetadata(IResolvable)
//  .logPromptsAndResponses(java.lang.Boolean)
//  .logPromptsAndResponses(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GeminiLoggingSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.loggingSettingId">loggingSettingId</a></code> | <code>java.lang.String</code> | Id of the Logging Setting. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#id GeminiLoggingSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.logMetadata">logMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to log metadata. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.logPromptsAndResponses">logPromptsAndResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to log prompts and responses. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#project GeminiLoggingSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#location GeminiLoggingSetting#location}

---

##### `loggingSettingId`<sup>Required</sup> <a name="loggingSettingId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.loggingSettingId"></a>

- *Type:* java.lang.String

Id of the Logging Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#logging_setting_id GeminiLoggingSetting#logging_setting_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#id GeminiLoggingSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#labels GeminiLoggingSetting#labels}

---

##### `logMetadata`<sup>Optional</sup> <a name="logMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.logMetadata"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to log metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#log_metadata GeminiLoggingSetting#log_metadata}

---

##### `logPromptsAndResponses`<sup>Optional</sup> <a name="logPromptsAndResponses" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.logPromptsAndResponses"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to log prompts and responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#log_prompts_and_responses GeminiLoggingSetting#log_prompts_and_responses}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#project GeminiLoggingSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#timeouts GeminiLoggingSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLogMetadata">resetLogMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLogPromptsAndResponses">resetLogPromptsAndResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.putTimeouts"></a>

```java
public void putTimeouts(GeminiLoggingSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogMetadata` <a name="resetLogMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLogMetadata"></a>

```java
public void resetLogMetadata()
```

##### `resetLogPromptsAndResponses` <a name="resetLogPromptsAndResponses" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetLogPromptsAndResponses"></a>

```java
public void resetLogPromptsAndResponses()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiLoggingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSetting;

GeminiLoggingSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSetting;

GeminiLoggingSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSetting;

GeminiLoggingSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSetting;

GeminiLoggingSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiLoggingSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GeminiLoggingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiLoggingSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiLoggingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GeminiLoggingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference">GeminiLoggingSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.loggingSettingIdInput">loggingSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logMetadataInput">logMetadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logPromptsAndResponsesInput">logPromptsAndResponsesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.loggingSettingId">loggingSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logMetadata">logMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logPromptsAndResponses">logPromptsAndResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.timeouts"></a>

```java
public GeminiLoggingSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference">GeminiLoggingSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingSettingIdInput`<sup>Optional</sup> <a name="loggingSettingIdInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.loggingSettingIdInput"></a>

```java
public java.lang.String getLoggingSettingIdInput();
```

- *Type:* java.lang.String

---

##### `logMetadataInput`<sup>Optional</sup> <a name="logMetadataInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logMetadataInput"></a>

```java
public java.lang.Object getLogMetadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logPromptsAndResponsesInput`<sup>Optional</sup> <a name="logPromptsAndResponsesInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logPromptsAndResponsesInput"></a>

```java
public java.lang.Object getLogPromptsAndResponsesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `loggingSettingId`<sup>Required</sup> <a name="loggingSettingId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.loggingSettingId"></a>

```java
public java.lang.String getLoggingSettingId();
```

- *Type:* java.lang.String

---

##### `logMetadata`<sup>Required</sup> <a name="logMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logMetadata"></a>

```java
public java.lang.Object getLogMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logPromptsAndResponses`<sup>Required</sup> <a name="logPromptsAndResponses" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.logPromptsAndResponses"></a>

```java
public java.lang.Object getLogPromptsAndResponses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiLoggingSettingConfig <a name="GeminiLoggingSettingConfig" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSettingConfig;

GeminiLoggingSettingConfig.builder()
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
    .location(java.lang.String)
    .loggingSettingId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logMetadata(java.lang.Boolean)
//  .logMetadata(IResolvable)
//  .logPromptsAndResponses(java.lang.Boolean)
//  .logPromptsAndResponses(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GeminiLoggingSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.loggingSettingId">loggingSettingId</a></code> | <code>java.lang.String</code> | Id of the Logging Setting. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#id GeminiLoggingSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.logMetadata">logMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to log metadata. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.logPromptsAndResponses">logPromptsAndResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to log prompts and responses. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#project GeminiLoggingSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#location GeminiLoggingSetting#location}

---

##### `loggingSettingId`<sup>Required</sup> <a name="loggingSettingId" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.loggingSettingId"></a>

```java
public java.lang.String getLoggingSettingId();
```

- *Type:* java.lang.String

Id of the Logging Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#logging_setting_id GeminiLoggingSetting#logging_setting_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#id GeminiLoggingSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#labels GeminiLoggingSetting#labels}

---

##### `logMetadata`<sup>Optional</sup> <a name="logMetadata" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.logMetadata"></a>

```java
public java.lang.Object getLogMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to log metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#log_metadata GeminiLoggingSetting#log_metadata}

---

##### `logPromptsAndResponses`<sup>Optional</sup> <a name="logPromptsAndResponses" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.logPromptsAndResponses"></a>

```java
public java.lang.Object getLogPromptsAndResponses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to log prompts and responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#log_prompts_and_responses GeminiLoggingSetting#log_prompts_and_responses}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#project GeminiLoggingSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingConfig.property.timeouts"></a>

```java
public GeminiLoggingSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#timeouts GeminiLoggingSetting#timeouts}

---

### GeminiLoggingSettingTimeouts <a name="GeminiLoggingSettingTimeouts" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSettingTimeouts;

GeminiLoggingSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#create GeminiLoggingSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#delete GeminiLoggingSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#update GeminiLoggingSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#create GeminiLoggingSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#delete GeminiLoggingSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_logging_setting#update GeminiLoggingSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiLoggingSettingTimeoutsOutputReference <a name="GeminiLoggingSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_logging_setting.GeminiLoggingSettingTimeoutsOutputReference;

new GeminiLoggingSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiLoggingSetting.GeminiLoggingSettingTimeouts">GeminiLoggingSettingTimeouts</a>

---




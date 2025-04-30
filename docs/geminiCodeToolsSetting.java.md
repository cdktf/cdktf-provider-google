# `geminiCodeToolsSetting` Submodule <a name="`geminiCodeToolsSetting` Submodule" id="@cdktf/provider-google.geminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeToolsSetting <a name="GeminiCodeToolsSetting" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSetting;

GeminiCodeToolsSetting.Builder.create(Construct scope, java.lang.String id)
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
    .codeToolsSettingId(java.lang.String)
    .enabledTool(IResolvable)
    .enabledTool(java.util.List<GeminiCodeToolsSettingEnabledTool>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiCodeToolsSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.enabledTool">enabledTool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>></code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId"></a>

- *Type:* java.lang.String

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.enabledTool"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>>

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool">putEnabledTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnabledTool` <a name="putEnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool"></a>

```java
public void putEnabledTool(IResolvable OR java.util.List<GeminiCodeToolsSettingEnabledTool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts"></a>

```java
public void putTimeouts(GeminiCodeToolsSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSetting;

GeminiCodeToolsSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSetting;

GeminiCodeToolsSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSetting;

GeminiCodeToolsSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSetting;

GeminiCodeToolsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiCodeToolsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiCodeToolsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool">enabledTool</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput">codeToolsSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput">enabledToolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool"></a>

```java
public GeminiCodeToolsSettingEnabledToolList getEnabledTool();
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts"></a>

```java
public GeminiCodeToolsSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `codeToolsSettingIdInput`<sup>Optional</sup> <a name="codeToolsSettingIdInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```java
public java.lang.String getCodeToolsSettingIdInput();
```

- *Type:* java.lang.String

---

##### `enabledToolInput`<sup>Optional</sup> <a name="enabledToolInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput"></a>

```java
public java.lang.Object getEnabledToolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```java
public java.lang.String getCodeToolsSettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeToolsSettingConfig <a name="GeminiCodeToolsSettingConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingConfig;

GeminiCodeToolsSettingConfig.builder()
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
    .codeToolsSettingId(java.lang.String)
    .enabledTool(IResolvable)
    .enabledTool(java.util.List<GeminiCodeToolsSettingEnabledTool>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiCodeToolsSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool">enabledTool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>></code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```java
public java.lang.String getCodeToolsSettingId();
```

- *Type:* java.lang.String

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool"></a>

```java
public java.lang.Object getEnabledTool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>>

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts"></a>

```java
public GeminiCodeToolsSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}

---

### GeminiCodeToolsSettingEnabledTool <a name="GeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledTool;

GeminiCodeToolsSettingEnabledTool.builder()
    .handle(java.lang.String)
    .tool(java.lang.String)
//  .accountConnector(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<GeminiCodeToolsSettingEnabledToolConfig>)
//  .uriOverride(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle">handle</a></code> | <code>java.lang.String</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool">tool</a></code> | <code>java.lang.String</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector">accountConnector</a></code> | <code>java.lang.String</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>></code> | config block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride">uriOverride</a></code> | <code>java.lang.String</code> | Overridden URI, if allowed by Tool. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#handle GeminiCodeToolsSetting#handle}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#tool GeminiCodeToolsSetting#tool}

---

##### `accountConnector`<sup>Optional</sup> <a name="accountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```java
public java.lang.String getAccountConnector();
```

- *Type:* java.lang.String

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#account_connector GeminiCodeToolsSetting#account_connector}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#config GeminiCodeToolsSetting#config}

---

##### `uriOverride`<sup>Optional</sup> <a name="uriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```java
public java.lang.String getUriOverride();
```

- *Type:* java.lang.String

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#uri_override GeminiCodeToolsSetting#uri_override}

---

### GeminiCodeToolsSettingEnabledToolConfig <a name="GeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledToolConfig;

GeminiCodeToolsSettingEnabledToolConfig.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key">key</a></code> | <code>java.lang.String</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value">value</a></code> | <code>java.lang.String</code> | Value of the configuration item. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#key GeminiCodeToolsSetting#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#value GeminiCodeToolsSetting#value}

---

### GeminiCodeToolsSettingTimeouts <a name="GeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingTimeouts;

GeminiCodeToolsSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeToolsSettingEnabledToolConfigList <a name="GeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledToolConfigList;

new GeminiCodeToolsSettingEnabledToolConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```java
public GeminiCodeToolsSettingEnabledToolConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>>

---


### GeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledToolConfigOutputReference;

new GeminiCodeToolsSettingEnabledToolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>

---


### GeminiCodeToolsSettingEnabledToolList <a name="GeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledToolList;

new GeminiCodeToolsSettingEnabledToolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get"></a>

```java
public GeminiCodeToolsSettingEnabledToolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>>

---


### GeminiCodeToolsSettingEnabledToolOutputReference <a name="GeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingEnabledToolOutputReference;

new GeminiCodeToolsSettingEnabledToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">resetAccountConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">resetUriOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<GeminiCodeToolsSettingEnabledToolConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>>

---

##### `resetAccountConnector` <a name="resetAccountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```java
public void resetAccountConnector()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetUriOverride` <a name="resetUriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```java
public void resetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">accountConnectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">handleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">toolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">uriOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">accountConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle">handle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool">tool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">uriOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```java
public GeminiCodeToolsSettingEnabledToolConfigList getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `accountConnectorInput`<sup>Optional</sup> <a name="accountConnectorInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```java
public java.lang.String getAccountConnectorInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>>

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```java
public java.lang.String getHandleInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```java
public java.lang.String getToolInput();
```

- *Type:* java.lang.String

---

##### `uriOverrideInput`<sup>Optional</sup> <a name="uriOverrideInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```java
public java.lang.String getUriOverrideInput();
```

- *Type:* java.lang.String

---

##### `accountConnector`<sup>Required</sup> <a name="accountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```java
public java.lang.String getAccountConnector();
```

- *Type:* java.lang.String

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

---

##### `uriOverride`<sup>Required</sup> <a name="uriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```java
public java.lang.String getUriOverride();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>

---


### GeminiCodeToolsSettingTimeoutsOutputReference <a name="GeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_code_tools_setting.GeminiCodeToolsSettingTimeoutsOutputReference;

new GeminiCodeToolsSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

---




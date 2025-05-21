# `geminiDataSharingWithGoogleSetting` Submodule <a name="`geminiDataSharingWithGoogleSetting` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSetting <a name="GeminiDataSharingWithGoogleSetting" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSetting;

GeminiDataSharingWithGoogleSetting.Builder.create(Construct scope, java.lang.String id)
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
    .dataSharingWithGoogleSettingId(java.lang.String)
//  .enablePreviewDataSharing(java.lang.Boolean)
//  .enablePreviewDataSharing(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiDataSharingWithGoogleSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.enablePreviewDataSharing">enablePreviewDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether preview data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.dataSharingWithGoogleSettingId"></a>

- *Type:* java.lang.String

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `enablePreviewDataSharing`<sup>Optional</sup> <a name="enablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.enablePreviewDataSharing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether preview data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">resetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```java
public void putTimeouts(GeminiDataSharingWithGoogleSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `resetEnablePreviewDataSharing` <a name="resetEnablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```java
public void resetEnablePreviewDataSharing()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSetting;

GeminiDataSharingWithGoogleSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSetting;

GeminiDataSharingWithGoogleSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSetting;

GeminiDataSharingWithGoogleSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSetting;

GeminiDataSharingWithGoogleSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiDataSharingWithGoogleSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiDataSharingWithGoogleSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">enablePreviewDataSharingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">enablePreviewDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```java
public GeminiDataSharingWithGoogleSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingIdInput();
```

- *Type:* java.lang.String

---

##### `enablePreviewDataSharingInput`<sup>Optional</sup> <a name="enablePreviewDataSharingInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```java
public java.lang.Object getEnablePreviewDataSharingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

---

##### `enablePreviewDataSharing`<sup>Required</sup> <a name="enablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```java
public java.lang.Object getEnablePreviewDataSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingConfig <a name="GeminiDataSharingWithGoogleSettingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSettingConfig;

GeminiDataSharingWithGoogleSettingConfig.builder()
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
    .dataSharingWithGoogleSettingId(java.lang.String)
//  .enablePreviewDataSharing(java.lang.Boolean)
//  .enablePreviewDataSharing(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiDataSharingWithGoogleSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">enablePreviewDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether preview data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `enablePreviewDataSharing`<sup>Optional</sup> <a name="enablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```java
public java.lang.Object getEnablePreviewDataSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether preview data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```java
public GeminiDataSharingWithGoogleSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}

---

### GeminiDataSharingWithGoogleSettingTimeouts <a name="GeminiDataSharingWithGoogleSettingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSettingTimeouts;

GeminiDataSharingWithGoogleSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference;

new GeminiDataSharingWithGoogleSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---




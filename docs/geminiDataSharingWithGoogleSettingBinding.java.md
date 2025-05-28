# `geminiDataSharingWithGoogleSettingBinding` Submodule <a name="`geminiDataSharingWithGoogleSettingBinding` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSettingBinding <a name="GeminiDataSharingWithGoogleSettingBinding" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding google_gemini_data_sharing_with_google_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBinding;

GeminiDataSharingWithGoogleSettingBinding.Builder.create(Construct scope, java.lang.String id)
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
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiDataSharingWithGoogleSettingBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dataSharingWithGoogleSettingId"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* java.lang.String

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#setting_binding_id GeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#target GeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#labels GeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#location GeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.product"></a>

- *Type:* java.lang.String

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#product GeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#timeouts GeminiDataSharingWithGoogleSettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts"></a>

```java
public void putTimeouts(GeminiDataSharingWithGoogleSettingBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBinding;

GeminiDataSharingWithGoogleSettingBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBinding;

GeminiDataSharingWithGoogleSettingBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBinding;

GeminiDataSharingWithGoogleSettingBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBinding;

GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiDataSharingWithGoogleSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiDataSharingWithGoogleSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts"></a>

```java
public GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput"></a>

```java
public java.lang.String getSettingBindingIdInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingBindingConfig <a name="GeminiDataSharingWithGoogleSettingBindingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBindingConfig;

GeminiDataSharingWithGoogleSettingBindingConfig.builder()
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
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GeminiDataSharingWithGoogleSettingBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#setting_binding_id GeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#target GeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#labels GeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#location GeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#product GeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts"></a>

```java
public GeminiDataSharingWithGoogleSettingBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#timeouts GeminiDataSharingWithGoogleSettingBinding#timeouts}

---

### GeminiDataSharingWithGoogleSettingBindingTimeouts <a name="GeminiDataSharingWithGoogleSettingBindingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBindingTimeouts;

GeminiDataSharingWithGoogleSettingBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_data_sharing_with_google_setting_binding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference;

new GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---




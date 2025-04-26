# `osConfigPatchDeployment` Submodule <a name="`osConfigPatchDeployment` Submodule" id="@cdktf/provider-google.osConfigPatchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsConfigPatchDeployment <a name="OsConfigPatchDeployment" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment google_os_config_patch_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeployment;

OsConfigPatchDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .instanceFilter(OsConfigPatchDeploymentInstanceFilter)
    .patchDeploymentId(java.lang.String)
//  .description(java.lang.String)
//  .duration(java.lang.String)
//  .id(java.lang.String)
//  .oneTimeSchedule(OsConfigPatchDeploymentOneTimeSchedule)
//  .patchConfig(OsConfigPatchDeploymentPatchConfig)
//  .project(java.lang.String)
//  .recurringSchedule(OsConfigPatchDeploymentRecurringSchedule)
//  .rollout(OsConfigPatchDeploymentRollout)
//  .timeouts(OsConfigPatchDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.instanceFilter">instanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.patchDeploymentId">patchDeploymentId</a></code> | <code>java.lang.String</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.patchConfig">patchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceFilter`<sup>Required</sup> <a name="instanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.instanceFilter"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#instance_filter OsConfigPatchDeployment#instance_filter}

---

##### `patchDeploymentId`<sup>Required</sup> <a name="patchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.patchDeploymentId"></a>

- *Type:* java.lang.String

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#description OsConfigPatchDeployment#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#duration OsConfigPatchDeployment#duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oneTimeSchedule`<sup>Optional</sup> <a name="oneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.oneTimeSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#one_time_schedule OsConfigPatchDeployment#one_time_schedule}

---

##### `patchConfig`<sup>Optional</sup> <a name="patchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.patchConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#patch_config OsConfigPatchDeployment#patch_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}.

---

##### `recurringSchedule`<sup>Optional</sup> <a name="recurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.recurringSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#recurring_schedule OsConfigPatchDeployment#recurring_schedule}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.rollout"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#rollout OsConfigPatchDeployment#rollout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#timeouts OsConfigPatchDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter">putInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule">putOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig">putPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule">putRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout">putRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule">resetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig">resetPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule">resetRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout">resetRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceFilter` <a name="putInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter"></a>

```java
public void putInstanceFilter(OsConfigPatchDeploymentInstanceFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `putOneTimeSchedule` <a name="putOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule"></a>

```java
public void putOneTimeSchedule(OsConfigPatchDeploymentOneTimeSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `putPatchConfig` <a name="putPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig"></a>

```java
public void putPatchConfig(OsConfigPatchDeploymentPatchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `putRecurringSchedule` <a name="putRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule"></a>

```java
public void putRecurringSchedule(OsConfigPatchDeploymentRecurringSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `putRollout` <a name="putRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout"></a>

```java
public void putRollout(OsConfigPatchDeploymentRollout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts"></a>

```java
public void putTimeouts(OsConfigPatchDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetOneTimeSchedule` <a name="resetOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule"></a>

```java
public void resetOneTimeSchedule()
```

##### `resetPatchConfig` <a name="resetPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig"></a>

```java
public void resetPatchConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRecurringSchedule` <a name="resetRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule"></a>

```java
public void resetRecurringSchedule()
```

##### `resetRollout` <a name="resetRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout"></a>

```java
public void resetRollout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsConfigPatchDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeployment;

OsConfigPatchDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeployment;

OsConfigPatchDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeployment;

OsConfigPatchDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeployment;

OsConfigPatchDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsConfigPatchDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsConfigPatchDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsConfigPatchDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsConfigPatchDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsConfigPatchDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter">instanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime">lastExecuteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig">patchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput">instanceFilterInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput">oneTimeScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput">patchConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput">patchDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput">recurringScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput">rolloutInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId">patchDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `instanceFilter`<sup>Required</sup> <a name="instanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter"></a>

```java
public OsConfigPatchDeploymentInstanceFilterOutputReference getInstanceFilter();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a>

---

##### `lastExecuteTime`<sup>Required</sup> <a name="lastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime"></a>

```java
public java.lang.String getLastExecuteTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oneTimeSchedule`<sup>Required</sup> <a name="oneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule"></a>

```java
public OsConfigPatchDeploymentOneTimeScheduleOutputReference getOneTimeSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a>

---

##### `patchConfig`<sup>Required</sup> <a name="patchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigOutputReference getPatchConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a>

---

##### `recurringSchedule`<sup>Required</sup> <a name="recurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleOutputReference getRecurringSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout"></a>

```java
public OsConfigPatchDeploymentRolloutOutputReference getRollout();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts"></a>

```java
public OsConfigPatchDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceFilterInput`<sup>Optional</sup> <a name="instanceFilterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput"></a>

```java
public OsConfigPatchDeploymentInstanceFilter getInstanceFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `oneTimeScheduleInput`<sup>Optional</sup> <a name="oneTimeScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput"></a>

```java
public OsConfigPatchDeploymentOneTimeSchedule getOneTimeScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `patchConfigInput`<sup>Optional</sup> <a name="patchConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput"></a>

```java
public OsConfigPatchDeploymentPatchConfig getPatchConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `patchDeploymentIdInput`<sup>Optional</sup> <a name="patchDeploymentIdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput"></a>

```java
public java.lang.String getPatchDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `recurringScheduleInput`<sup>Optional</sup> <a name="recurringScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput"></a>

```java
public OsConfigPatchDeploymentRecurringSchedule getRecurringScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput"></a>

```java
public OsConfigPatchDeploymentRollout getRolloutInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `patchDeploymentId`<sup>Required</sup> <a name="patchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId"></a>

```java
public java.lang.String getPatchDeploymentId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsConfigPatchDeploymentConfig <a name="OsConfigPatchDeploymentConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentConfig;

OsConfigPatchDeploymentConfig.builder()
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
    .instanceFilter(OsConfigPatchDeploymentInstanceFilter)
    .patchDeploymentId(java.lang.String)
//  .description(java.lang.String)
//  .duration(java.lang.String)
//  .id(java.lang.String)
//  .oneTimeSchedule(OsConfigPatchDeploymentOneTimeSchedule)
//  .patchConfig(OsConfigPatchDeploymentPatchConfig)
//  .project(java.lang.String)
//  .recurringSchedule(OsConfigPatchDeploymentRecurringSchedule)
//  .rollout(OsConfigPatchDeploymentRollout)
//  .timeouts(OsConfigPatchDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter">instanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId">patchDeploymentId</a></code> | <code>java.lang.String</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig">patchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceFilter`<sup>Required</sup> <a name="instanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter"></a>

```java
public OsConfigPatchDeploymentInstanceFilter getInstanceFilter();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#instance_filter OsConfigPatchDeployment#instance_filter}

---

##### `patchDeploymentId`<sup>Required</sup> <a name="patchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId"></a>

```java
public java.lang.String getPatchDeploymentId();
```

- *Type:* java.lang.String

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#description OsConfigPatchDeployment#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#duration OsConfigPatchDeployment#duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oneTimeSchedule`<sup>Optional</sup> <a name="oneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule"></a>

```java
public OsConfigPatchDeploymentOneTimeSchedule getOneTimeSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#one_time_schedule OsConfigPatchDeployment#one_time_schedule}

---

##### `patchConfig`<sup>Optional</sup> <a name="patchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfig getPatchConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#patch_config OsConfigPatchDeployment#patch_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}.

---

##### `recurringSchedule`<sup>Optional</sup> <a name="recurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule"></a>

```java
public OsConfigPatchDeploymentRecurringSchedule getRecurringSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#recurring_schedule OsConfigPatchDeployment#recurring_schedule}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout"></a>

```java
public OsConfigPatchDeploymentRollout getRollout();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#rollout OsConfigPatchDeployment#rollout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts"></a>

```java
public OsConfigPatchDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#timeouts OsConfigPatchDeployment#timeouts}

---

### OsConfigPatchDeploymentInstanceFilter <a name="OsConfigPatchDeploymentInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentInstanceFilter;

OsConfigPatchDeploymentInstanceFilter.builder()
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .groupLabels(IResolvable)
//  .groupLabels(java.util.List<OsConfigPatchDeploymentInstanceFilterGroupLabels>)
//  .instanceNamePrefixes(java.util.List<java.lang.String>)
//  .instances(java.util.List<java.lang.String>)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Target all VM instances in the project. If true, no other criteria is permitted. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels">groupLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>></code> | group_labels block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes">instanceNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Targets VMs whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#all OsConfigPatchDeployment#all}

---

##### `groupLabels`<sup>Optional</sup> <a name="groupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels"></a>

```java
public java.lang.Object getGroupLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>>

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#group_labels OsConfigPatchDeployment#group_labels}

---

##### `instanceNamePrefixes`<sup>Optional</sup> <a name="instanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getInstanceNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#instance_name_prefixes OsConfigPatchDeployment#instance_name_prefixes}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#instances OsConfigPatchDeployment#instances}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#zones OsConfigPatchDeployment#zones}

---

### OsConfigPatchDeploymentInstanceFilterGroupLabels <a name="OsConfigPatchDeploymentInstanceFilterGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentInstanceFilterGroupLabels;

OsConfigPatchDeploymentInstanceFilterGroupLabels.builder()
    .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#labels OsConfigPatchDeployment#labels}

---

### OsConfigPatchDeploymentOneTimeSchedule <a name="OsConfigPatchDeploymentOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentOneTimeSchedule;

OsConfigPatchDeploymentOneTimeSchedule.builder()
    .executeTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime">executeTime</a></code> | <code>java.lang.String</code> | The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |

---

##### `executeTime`<sup>Required</sup> <a name="executeTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime"></a>

```java
public java.lang.String getExecuteTime();
```

- *Type:* java.lang.String

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#execute_time OsConfigPatchDeployment#execute_time}

---

### OsConfigPatchDeploymentPatchConfig <a name="OsConfigPatchDeploymentPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfig;

OsConfigPatchDeploymentPatchConfig.builder()
//  .apt(OsConfigPatchDeploymentPatchConfigApt)
//  .goo(OsConfigPatchDeploymentPatchConfigGoo)
//  .migInstancesAllowed(java.lang.Boolean)
//  .migInstancesAllowed(IResolvable)
//  .postStep(OsConfigPatchDeploymentPatchConfigPostStep)
//  .preStep(OsConfigPatchDeploymentPatchConfigPreStep)
//  .rebootConfig(java.lang.String)
//  .windowsUpdate(OsConfigPatchDeploymentPatchConfigWindowsUpdate)
//  .yum(OsConfigPatchDeploymentPatchConfigYum)
//  .zypper(OsConfigPatchDeploymentPatchConfigZypper)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt">apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo">goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed">migInstancesAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows the patch job to run on Managed instance groups (MIGs). |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep">postStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | post_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep">preStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | pre_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig">rebootConfig</a></code> | <code>java.lang.String</code> | Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate">windowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | windows_update block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum">yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper">zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | zypper block. |

---

##### `apt`<sup>Optional</sup> <a name="apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt"></a>

```java
public OsConfigPatchDeploymentPatchConfigApt getApt();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#apt OsConfigPatchDeployment#apt}

---

##### `goo`<sup>Optional</sup> <a name="goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo"></a>

```java
public OsConfigPatchDeploymentPatchConfigGoo getGoo();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#goo OsConfigPatchDeployment#goo}

---

##### `migInstancesAllowed`<sup>Optional</sup> <a name="migInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed"></a>

```java
public java.lang.Object getMigInstancesAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#mig_instances_allowed OsConfigPatchDeployment#mig_instances_allowed}

---

##### `postStep`<sup>Optional</sup> <a name="postStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStep getPostStep();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#post_step OsConfigPatchDeployment#post_step}

---

##### `preStep`<sup>Optional</sup> <a name="preStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStep getPreStep();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#pre_step OsConfigPatchDeployment#pre_step}

---

##### `rebootConfig`<sup>Optional</sup> <a name="rebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig"></a>

```java
public java.lang.String getRebootConfig();
```

- *Type:* java.lang.String

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#reboot_config OsConfigPatchDeployment#reboot_config}

---

##### `windowsUpdate`<sup>Optional</sup> <a name="windowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate"></a>

```java
public OsConfigPatchDeploymentPatchConfigWindowsUpdate getWindowsUpdate();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#windows_update OsConfigPatchDeployment#windows_update}

---

##### `yum`<sup>Optional</sup> <a name="yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum"></a>

```java
public OsConfigPatchDeploymentPatchConfigYum getYum();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#yum OsConfigPatchDeployment#yum}

---

##### `zypper`<sup>Optional</sup> <a name="zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper"></a>

```java
public OsConfigPatchDeploymentPatchConfigZypper getZypper();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#zypper OsConfigPatchDeployment#zypper}

---

### OsConfigPatchDeploymentPatchConfigApt <a name="OsConfigPatchDeploymentPatchConfigApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigApt;

OsConfigPatchDeploymentPatchConfigApt.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .exclusivePackages(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages">exclusivePackages</a></code> | <code>java.util.List<java.lang.String></code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type">type</a></code> | <code>java.lang.String</code> | By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `exclusivePackages`<sup>Optional</sup> <a name="exclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages"></a>

```java
public java.util.List<java.lang.String> getExclusivePackages();
```

- *Type:* java.util.List<java.lang.String>

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#type OsConfigPatchDeployment#type}

---

### OsConfigPatchDeploymentPatchConfigGoo <a name="OsConfigPatchDeploymentPatchConfigGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigGoo;

OsConfigPatchDeploymentPatchConfigGoo.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | goo update settings. Use this setting to override the default goo patch rules. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#enabled OsConfigPatchDeployment#enabled}

---

### OsConfigPatchDeploymentPatchConfigPostStep <a name="OsConfigPatchDeploymentPatchConfigPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStep;

OsConfigPatchDeploymentPatchConfigPostStep.builder()
//  .linuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig)
//  .windowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig">linuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig">windowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `linuxExecStepConfig`<sup>Optional</sup> <a name="linuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig getLinuxExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `windowsExecStepConfig`<sup>Optional</sup> <a name="windowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig getWindowsExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig;

OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.builder()
//  .allowedSuccessCodes(java.util.List<java.lang.Number>)
//  .gcsObject(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject)
//  .interpreter(java.lang.String)
//  .localPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath">localPath</a></code> | <code>java.lang.String</code> | An absolute path to the executable on the VM. |

---

##### `allowedSuccessCodes`<sup>Optional</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `gcsObject`<sup>Optional</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;

OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.builder()
    .bucket(java.lang.String)
    .generationNumber(java.lang.String)
    .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object">object</a></code> | <code>java.lang.String</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig;

OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.builder()
//  .allowedSuccessCodes(java.util.List<java.lang.Number>)
//  .gcsObject(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject)
//  .interpreter(java.lang.String)
//  .localPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath">localPath</a></code> | <code>java.lang.String</code> | An absolute path to the executable on the VM. |

---

##### `allowedSuccessCodes`<sup>Optional</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `gcsObject`<sup>Optional</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject;

OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.builder()
    .bucket(java.lang.String)
    .generationNumber(java.lang.String)
    .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object">object</a></code> | <code>java.lang.String</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStep <a name="OsConfigPatchDeploymentPatchConfigPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStep;

OsConfigPatchDeploymentPatchConfigPreStep.builder()
//  .linuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig)
//  .windowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig">linuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig">windowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `linuxExecStepConfig`<sup>Optional</sup> <a name="linuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig getLinuxExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `windowsExecStepConfig`<sup>Optional</sup> <a name="windowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig getWindowsExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig;

OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.builder()
//  .allowedSuccessCodes(java.util.List<java.lang.Number>)
//  .gcsObject(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject)
//  .interpreter(java.lang.String)
//  .localPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath">localPath</a></code> | <code>java.lang.String</code> | An absolute path to the executable on the VM. |

---

##### `allowedSuccessCodes`<sup>Optional</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `gcsObject`<sup>Optional</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject;

OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.builder()
    .bucket(java.lang.String)
    .generationNumber(java.lang.String)
    .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object">object</a></code> | <code>java.lang.String</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig;

OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.builder()
//  .allowedSuccessCodes(java.util.List<java.lang.Number>)
//  .gcsObject(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject)
//  .interpreter(java.lang.String)
//  .localPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath">localPath</a></code> | <code>java.lang.String</code> | An absolute path to the executable on the VM. |

---

##### `allowedSuccessCodes`<sup>Optional</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `gcsObject`<sup>Optional</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject;

OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.builder()
    .bucket(java.lang.String)
    .generationNumber(java.lang.String)
    .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object">object</a></code> | <code>java.lang.String</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigWindowsUpdate <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate;

OsConfigPatchDeploymentPatchConfigWindowsUpdate.builder()
//  .classifications(java.util.List<java.lang.String>)
//  .excludes(java.util.List<java.lang.String>)
//  .exclusivePatches(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications">classifications</a></code> | <code>java.util.List<java.lang.String></code> | Only apply updates of these windows update classifications. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | List of KBs to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches">exclusivePatches</a></code> | <code>java.util.List<java.lang.String></code> | An exclusive list of kbs to be updated. |

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications"></a>

```java
public java.util.List<java.lang.String> getClassifications();
```

- *Type:* java.util.List<java.lang.String>

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#classifications OsConfigPatchDeployment#classifications}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `exclusivePatches`<sup>Optional</sup> <a name="exclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches"></a>

```java
public java.util.List<java.lang.String> getExclusivePatches();
```

- *Type:* java.util.List<java.lang.String>

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

### OsConfigPatchDeploymentPatchConfigYum <a name="OsConfigPatchDeploymentPatchConfigYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigYum;

OsConfigPatchDeploymentPatchConfigYum.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .exclusivePackages(java.util.List<java.lang.String>)
//  .minimal(java.lang.Boolean)
//  .minimal(IResolvable)
//  .security(java.lang.Boolean)
//  .security(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages">exclusivePackages</a></code> | <code>java.util.List<java.lang.String></code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal">minimal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Will cause patch to run yum update-minimal instead. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security">security</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Adds the --security flag to yum update. Not supported on all platforms. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `exclusivePackages`<sup>Optional</sup> <a name="exclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages"></a>

```java
public java.util.List<java.lang.String> getExclusivePackages();
```

- *Type:* java.util.List<java.lang.String>

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `minimal`<sup>Optional</sup> <a name="minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal"></a>

```java
public java.lang.Object getMinimal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#minimal OsConfigPatchDeployment#minimal}

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security"></a>

```java
public java.lang.Object getSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#security OsConfigPatchDeployment#security}

---

### OsConfigPatchDeploymentPatchConfigZypper <a name="OsConfigPatchDeploymentPatchConfigZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigZypper;

OsConfigPatchDeploymentPatchConfigZypper.builder()
//  .categories(java.util.List<java.lang.String>)
//  .excludes(java.util.List<java.lang.String>)
//  .exclusivePatches(java.util.List<java.lang.String>)
//  .severities(java.util.List<java.lang.String>)
//  .withOptional(java.lang.Boolean)
//  .withOptional(IResolvable)
//  .withUpdate(java.lang.Boolean)
//  .withUpdate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Install only patches with these categories. Common categories include security, recommended, and feature. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | List of packages to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches">exclusivePatches</a></code> | <code>java.util.List<java.lang.String></code> | An exclusive list of patches to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | Install only patches with these severities. Common severities include critical, important, moderate, and low. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional">withOptional</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Adds the --with-optional flag to zypper patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate">withUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Adds the --with-update flag, to zypper patch. |

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#categories OsConfigPatchDeployment#categories}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `exclusivePatches`<sup>Optional</sup> <a name="exclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches"></a>

```java
public java.util.List<java.lang.String> getExclusivePatches();
```

- *Type:* java.util.List<java.lang.String>

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#severities OsConfigPatchDeployment#severities}

---

##### `withOptional`<sup>Optional</sup> <a name="withOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional"></a>

```java
public java.lang.Object getWithOptional();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#with_optional OsConfigPatchDeployment#with_optional}

---

##### `withUpdate`<sup>Optional</sup> <a name="withUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate"></a>

```java
public java.lang.Object getWithUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#with_update OsConfigPatchDeployment#with_update}

---

### OsConfigPatchDeploymentRecurringSchedule <a name="OsConfigPatchDeploymentRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringSchedule;

OsConfigPatchDeploymentRecurringSchedule.builder()
    .timeOfDay(OsConfigPatchDeploymentRecurringScheduleTimeOfDay)
    .timeZone(OsConfigPatchDeploymentRecurringScheduleTimeZone)
//  .endTime(java.lang.String)
//  .monthly(OsConfigPatchDeploymentRecurringScheduleMonthly)
//  .startTime(java.lang.String)
//  .weekly(OsConfigPatchDeploymentRecurringScheduleWeekly)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay">timeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | time_of_day block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | time_zone block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time at which a recurring patch deployment schedule is no longer active. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | monthly block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time that the recurring schedule becomes effective. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | weekly block. |

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay getTimeOfDay();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#time_of_day OsConfigPatchDeployment#time_of_day}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#time_zone OsConfigPatchDeployment#time_zone}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#end_time OsConfigPatchDeployment#end_time}

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthly getMonthly();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#monthly OsConfigPatchDeployment#monthly}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#start_time OsConfigPatchDeployment#start_time}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleWeekly getWeekly();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#weekly OsConfigPatchDeployment#weekly}

---

### OsConfigPatchDeploymentRecurringScheduleMonthly <a name="OsConfigPatchDeploymentRecurringScheduleMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleMonthly;

OsConfigPatchDeploymentRecurringScheduleMonthly.builder()
//  .monthDay(java.lang.Number)
//  .weekDayOfMonth(OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay">monthDay</a></code> | <code>java.lang.Number</code> | One day of the month. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth">weekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `monthDay`<sup>Optional</sup> <a name="monthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay"></a>

```java
public java.lang.Number getMonthDay();
```

- *Type:* java.lang.Number

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#month_day OsConfigPatchDeployment#month_day}

---

##### `weekDayOfMonth`<sup>Optional</sup> <a name="weekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth getWeekDayOfMonth();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#week_day_of_month OsConfigPatchDeployment#week_day_of_month}

---

### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;

OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.builder()
    .dayOfWeek(java.lang.String)
    .weekOrdinal(java.lang.Number)
//  .dayOffset(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal">weekOrdinal</a></code> | <code>java.lang.Number</code> | Week number in a month. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset">dayOffset</a></code> | <code>java.lang.Number</code> | Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

##### `weekOrdinal`<sup>Required</sup> <a name="weekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal"></a>

```java
public java.lang.Number getWeekOrdinal();
```

- *Type:* java.lang.Number

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#week_ordinal OsConfigPatchDeployment#week_ordinal}

---

##### `dayOffset`<sup>Optional</sup> <a name="dayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset"></a>

```java
public java.lang.Number getDayOffset();
```

- *Type:* java.lang.Number

Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#day_offset OsConfigPatchDeployment#day_offset}

---

### OsConfigPatchDeploymentRecurringScheduleTimeOfDay <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay;

OsConfigPatchDeploymentRecurringScheduleTimeOfDay.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#hours OsConfigPatchDeployment#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#minutes OsConfigPatchDeployment#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#nanos OsConfigPatchDeployment#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#seconds OsConfigPatchDeployment#seconds}

---

### OsConfigPatchDeploymentRecurringScheduleTimeZone <a name="OsConfigPatchDeploymentRecurringScheduleTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleTimeZone;

OsConfigPatchDeploymentRecurringScheduleTimeZone.builder()
    .id(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version">version</a></code> | <code>java.lang.String</code> | IANA Time Zone Database version number, e.g. "2019a". |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#version OsConfigPatchDeployment#version}

---

### OsConfigPatchDeploymentRecurringScheduleWeekly <a name="OsConfigPatchDeploymentRecurringScheduleWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleWeekly;

OsConfigPatchDeploymentRecurringScheduleWeekly.builder()
    .dayOfWeek(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

### OsConfigPatchDeploymentRollout <a name="OsConfigPatchDeploymentRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRollout;

OsConfigPatchDeploymentRollout.builder()
    .disruptionBudget(OsConfigPatchDeploymentRolloutDisruptionBudget)
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget">disruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | disruption_budget block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode">mode</a></code> | <code>java.lang.String</code> | Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]. |

---

##### `disruptionBudget`<sup>Required</sup> <a name="disruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget"></a>

```java
public OsConfigPatchDeploymentRolloutDisruptionBudget getDisruptionBudget();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#disruption_budget OsConfigPatchDeployment#disruption_budget}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#mode OsConfigPatchDeployment#mode}

---

### OsConfigPatchDeploymentRolloutDisruptionBudget <a name="OsConfigPatchDeploymentRolloutDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRolloutDisruptionBudget;

OsConfigPatchDeploymentRolloutDisruptionBudget.builder()
//  .fixed(java.lang.Number)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed value. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

Specifies a fixed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#fixed OsConfigPatchDeployment#fixed}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#percentage OsConfigPatchDeployment#percentage}

---

### OsConfigPatchDeploymentTimeouts <a name="OsConfigPatchDeploymentTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentTimeouts;

OsConfigPatchDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#create OsConfigPatchDeployment#create}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#create OsConfigPatchDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsConfigPatchDeploymentInstanceFilterGroupLabelsList <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsList" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList;

new OsConfigPatchDeploymentInstanceFilterGroupLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get"></a>

```java
public OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>>

---


### OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference;

new OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>

---


### OsConfigPatchDeploymentInstanceFilterOutputReference <a name="OsConfigPatchDeploymentInstanceFilterOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentInstanceFilterOutputReference;

new OsConfigPatchDeploymentInstanceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels">putGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels">resetGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes">resetInstanceNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones">resetZones</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupLabels` <a name="putGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels"></a>

```java
public void putGroupLabels(IResolvable OR java.util.List<OsConfigPatchDeploymentInstanceFilterGroupLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>>

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetGroupLabels` <a name="resetGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels"></a>

```java
public void resetGroupLabels()
```

##### `resetInstanceNamePrefixes` <a name="resetInstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes"></a>

```java
public void resetInstanceNamePrefixes()
```

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones"></a>

```java
public void resetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels">groupLabels</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput">groupLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput">instanceNamePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes">instanceNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupLabels`<sup>Required</sup> <a name="groupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels"></a>

```java
public OsConfigPatchDeploymentInstanceFilterGroupLabelsList getGroupLabels();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupLabelsInput`<sup>Optional</sup> <a name="groupLabelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput"></a>

```java
public java.lang.Object getGroupLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels">OsConfigPatchDeploymentInstanceFilterGroupLabels</a>>

---

##### `instanceNamePrefixesInput`<sup>Optional</sup> <a name="instanceNamePrefixesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceNamePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceNamePrefixes`<sup>Required</sup> <a name="instanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getInstanceNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentInstanceFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---


### OsConfigPatchDeploymentOneTimeScheduleOutputReference <a name="OsConfigPatchDeploymentOneTimeScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference;

new OsConfigPatchDeploymentOneTimeScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput">executeTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime">executeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executeTimeInput`<sup>Optional</sup> <a name="executeTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput"></a>

```java
public java.lang.String getExecuteTimeInput();
```

- *Type:* java.lang.String

---

##### `executeTime`<sup>Required</sup> <a name="executeTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime"></a>

```java
public java.lang.String getExecuteTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentOneTimeSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---


### OsConfigPatchDeploymentPatchConfigAptOutputReference <a name="OsConfigPatchDeploymentPatchConfigAptOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigAptOutputReference;

new OsConfigPatchDeploymentPatchConfigAptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages">resetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetExclusivePackages` <a name="resetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages"></a>

```java
public void resetExclusivePackages()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput">exclusivePackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages">exclusivePackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePackagesInput`<sup>Optional</sup> <a name="exclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput"></a>

```java
public java.util.List<java.lang.String> getExclusivePackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePackages`<sup>Required</sup> <a name="exclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages"></a>

```java
public java.util.List<java.lang.String> getExclusivePackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigApt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---


### OsConfigPatchDeploymentPatchConfigGooOutputReference <a name="OsConfigPatchDeploymentPatchConfigGooOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigGooOutputReference;

new OsConfigPatchDeploymentPatchConfigGooOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigGoo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---


### OsConfigPatchDeploymentPatchConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigOutputReference;

new OsConfigPatchDeploymentPatchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt">putApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo">putGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep">putPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep">putPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate">putWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum">putYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper">putZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt">resetApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo">resetGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed">resetMigInstancesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep">resetPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep">resetPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig">resetRebootConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate">resetWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum">resetYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper">resetZypper</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApt` <a name="putApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt"></a>

```java
public void putApt(OsConfigPatchDeploymentPatchConfigApt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `putGoo` <a name="putGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo"></a>

```java
public void putGoo(OsConfigPatchDeploymentPatchConfigGoo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `putPostStep` <a name="putPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep"></a>

```java
public void putPostStep(OsConfigPatchDeploymentPatchConfigPostStep value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `putPreStep` <a name="putPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep"></a>

```java
public void putPreStep(OsConfigPatchDeploymentPatchConfigPreStep value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `putWindowsUpdate` <a name="putWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate"></a>

```java
public void putWindowsUpdate(OsConfigPatchDeploymentPatchConfigWindowsUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `putYum` <a name="putYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum"></a>

```java
public void putYum(OsConfigPatchDeploymentPatchConfigYum value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `putZypper` <a name="putZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper"></a>

```java
public void putZypper(OsConfigPatchDeploymentPatchConfigZypper value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `resetApt` <a name="resetApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt"></a>

```java
public void resetApt()
```

##### `resetGoo` <a name="resetGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo"></a>

```java
public void resetGoo()
```

##### `resetMigInstancesAllowed` <a name="resetMigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed"></a>

```java
public void resetMigInstancesAllowed()
```

##### `resetPostStep` <a name="resetPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep"></a>

```java
public void resetPostStep()
```

##### `resetPreStep` <a name="resetPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep"></a>

```java
public void resetPreStep()
```

##### `resetRebootConfig` <a name="resetRebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig"></a>

```java
public void resetRebootConfig()
```

##### `resetWindowsUpdate` <a name="resetWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate"></a>

```java
public void resetWindowsUpdate()
```

##### `resetYum` <a name="resetYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum"></a>

```java
public void resetYum()
```

##### `resetZypper` <a name="resetZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper"></a>

```java
public void resetZypper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt">apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo">goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep">postStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep">preStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate">windowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum">yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper">zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput">aptInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput">gooInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput">migInstancesAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput">postStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput">preStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput">rebootConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput">windowsUpdateInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput">yumInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput">zypperInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed">migInstancesAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig">rebootConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apt`<sup>Required</sup> <a name="apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt"></a>

```java
public OsConfigPatchDeploymentPatchConfigAptOutputReference getApt();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a>

---

##### `goo`<sup>Required</sup> <a name="goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo"></a>

```java
public OsConfigPatchDeploymentPatchConfigGooOutputReference getGoo();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a>

---

##### `postStep`<sup>Required</sup> <a name="postStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepOutputReference getPostStep();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a>

---

##### `preStep`<sup>Required</sup> <a name="preStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepOutputReference getPreStep();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a>

---

##### `windowsUpdate`<sup>Required</sup> <a name="windowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate"></a>

```java
public OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference getWindowsUpdate();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a>

---

##### `yum`<sup>Required</sup> <a name="yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum"></a>

```java
public OsConfigPatchDeploymentPatchConfigYumOutputReference getYum();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a>

---

##### `zypper`<sup>Required</sup> <a name="zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper"></a>

```java
public OsConfigPatchDeploymentPatchConfigZypperOutputReference getZypper();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a>

---

##### `aptInput`<sup>Optional</sup> <a name="aptInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigApt getAptInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `gooInput`<sup>Optional</sup> <a name="gooInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigGoo getGooInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `migInstancesAllowedInput`<sup>Optional</sup> <a name="migInstancesAllowedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput"></a>

```java
public java.lang.Object getMigInstancesAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `postStepInput`<sup>Optional</sup> <a name="postStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStep getPostStepInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `preStepInput`<sup>Optional</sup> <a name="preStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStep getPreStepInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `rebootConfigInput`<sup>Optional</sup> <a name="rebootConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput"></a>

```java
public java.lang.String getRebootConfigInput();
```

- *Type:* java.lang.String

---

##### `windowsUpdateInput`<sup>Optional</sup> <a name="windowsUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigWindowsUpdate getWindowsUpdateInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `yumInput`<sup>Optional</sup> <a name="yumInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigYum getYumInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `zypperInput`<sup>Optional</sup> <a name="zypperInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigZypper getZypperInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `migInstancesAllowed`<sup>Required</sup> <a name="migInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed"></a>

```java
public java.lang.Object getMigInstancesAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rebootConfig`<sup>Required</sup> <a name="rebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig"></a>

```java
public java.lang.String getRebootConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generationNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationNumberInput`<sup>Optional</sup> <a name="generationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```java
public java.lang.String getGenerationNumberInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject">putGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">resetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject">resetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter">resetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcsObject` <a name="putGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```java
public void putGcsObject(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `resetAllowedSuccessCodes` <a name="resetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```java
public void resetAllowedSuccessCodes()
```

##### `resetGcsObject` <a name="resetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```java
public void resetGcsObject()
```

##### `resetInterpreter` <a name="resetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```java
public void resetInterpreter()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowedSuccessCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">gcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput">interpreterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsObject`<sup>Required</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `allowedSuccessCodesInput`<sup>Optional</sup> <a name="allowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcsObjectInput`<sup>Optional</sup> <a name="gcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject getGcsObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `interpreterInput`<sup>Optional</sup> <a name="interpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```java
public java.lang.String getInterpreterInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `allowedSuccessCodes`<sup>Required</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference;

new OsConfigPatchDeploymentPatchConfigPostStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig">putLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig">putWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig">resetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig">resetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxExecStepConfig` <a name="putLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig"></a>

```java
public void putLinuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `putWindowsExecStepConfig` <a name="putWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig"></a>

```java
public void putWindowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `resetLinuxExecStepConfig` <a name="resetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig"></a>

```java
public void resetLinuxExecStepConfig()
```

##### `resetWindowsExecStepConfig` <a name="resetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig"></a>

```java
public void resetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig">linuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig">windowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput">linuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput">windowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxExecStepConfig`<sup>Required</sup> <a name="linuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference getLinuxExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a>

---

##### `windowsExecStepConfig`<sup>Required</sup> <a name="windowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference getWindowsExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a>

---

##### `linuxExecStepConfigInput`<sup>Optional</sup> <a name="linuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig getLinuxExecStepConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `windowsExecStepConfigInput`<sup>Optional</sup> <a name="windowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig getWindowsExecStepConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStep getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generationNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationNumberInput`<sup>Optional</sup> <a name="generationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```java
public java.lang.String getGenerationNumberInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject">putGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">resetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject">resetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter">resetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcsObject` <a name="putGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```java
public void putGcsObject(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `resetAllowedSuccessCodes` <a name="resetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```java
public void resetAllowedSuccessCodes()
```

##### `resetGcsObject` <a name="resetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```java
public void resetGcsObject()
```

##### `resetInterpreter` <a name="resetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```java
public void resetInterpreter()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowedSuccessCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">gcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput">interpreterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsObject`<sup>Required</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `allowedSuccessCodesInput`<sup>Optional</sup> <a name="allowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcsObjectInput`<sup>Optional</sup> <a name="gcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject getGcsObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `interpreterInput`<sup>Optional</sup> <a name="interpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```java
public java.lang.String getInterpreterInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `allowedSuccessCodes`<sup>Required</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generationNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationNumberInput`<sup>Optional</sup> <a name="generationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```java
public java.lang.String getGenerationNumberInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject">putGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">resetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject">resetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter">resetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcsObject` <a name="putGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```java
public void putGcsObject(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `resetAllowedSuccessCodes` <a name="resetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```java
public void resetAllowedSuccessCodes()
```

##### `resetGcsObject` <a name="resetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```java
public void resetGcsObject()
```

##### `resetInterpreter` <a name="resetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```java
public void resetInterpreter()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowedSuccessCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">gcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput">interpreterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsObject`<sup>Required</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `allowedSuccessCodesInput`<sup>Optional</sup> <a name="allowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcsObjectInput`<sup>Optional</sup> <a name="gcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject getGcsObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `interpreterInput`<sup>Optional</sup> <a name="interpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```java
public java.lang.String getInterpreterInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `allowedSuccessCodes`<sup>Required</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference;

new OsConfigPatchDeploymentPatchConfigPreStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig">putLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig">putWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig">resetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig">resetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxExecStepConfig` <a name="putLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig"></a>

```java
public void putLinuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `putWindowsExecStepConfig` <a name="putWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig"></a>

```java
public void putWindowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `resetLinuxExecStepConfig` <a name="resetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig"></a>

```java
public void resetLinuxExecStepConfig()
```

##### `resetWindowsExecStepConfig` <a name="resetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig"></a>

```java
public void resetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig">linuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig">windowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput">linuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput">windowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxExecStepConfig`<sup>Required</sup> <a name="linuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference getLinuxExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a>

---

##### `windowsExecStepConfig`<sup>Required</sup> <a name="windowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference getWindowsExecStepConfig();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a>

---

##### `linuxExecStepConfigInput`<sup>Optional</sup> <a name="linuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig getLinuxExecStepConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `windowsExecStepConfigInput`<sup>Optional</sup> <a name="windowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig getWindowsExecStepConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStep getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generationNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">generationNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationNumberInput`<sup>Optional</sup> <a name="generationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```java
public java.lang.String getGenerationNumberInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generationNumber`<sup>Required</sup> <a name="generationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```java
public java.lang.String getGenerationNumber();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject">putGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">resetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject">resetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter">resetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcsObject` <a name="putGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```java
public void putGcsObject(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `resetAllowedSuccessCodes` <a name="resetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```java
public void resetAllowedSuccessCodes()
```

##### `resetGcsObject` <a name="resetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```java
public void resetGcsObject()
```

##### `resetInterpreter` <a name="resetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```java
public void resetInterpreter()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject">gcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowedSuccessCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">gcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput">interpreterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">allowedSuccessCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsObject`<sup>Required</sup> <a name="gcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference getGcsObject();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `allowedSuccessCodesInput`<sup>Optional</sup> <a name="allowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcsObjectInput`<sup>Optional</sup> <a name="gcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject getGcsObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `interpreterInput`<sup>Optional</sup> <a name="interpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```java
public java.lang.String getInterpreterInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `allowedSuccessCodes`<sup>Required</sup> <a name="allowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowedSuccessCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```java
public java.lang.String getInterpreter();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference;

new OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications">resetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches">resetExclusivePatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassifications` <a name="resetClassifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications"></a>

```java
public void resetClassifications()
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetExclusivePatches` <a name="resetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches"></a>

```java
public void resetExclusivePatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput">classificationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput">exclusivePatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications">classifications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches">exclusivePatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationsInput`<sup>Optional</sup> <a name="classificationsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput"></a>

```java
public java.util.List<java.lang.String> getClassificationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePatchesInput`<sup>Optional</sup> <a name="exclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput"></a>

```java
public java.util.List<java.lang.String> getExclusivePatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications"></a>

```java
public java.util.List<java.lang.String> getClassifications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePatches`<sup>Required</sup> <a name="exclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches"></a>

```java
public java.util.List<java.lang.String> getExclusivePatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigWindowsUpdate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---


### OsConfigPatchDeploymentPatchConfigYumOutputReference <a name="OsConfigPatchDeploymentPatchConfigYumOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigYumOutputReference;

new OsConfigPatchDeploymentPatchConfigYumOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages">resetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal">resetMinimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetExclusivePackages` <a name="resetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages"></a>

```java
public void resetExclusivePackages()
```

##### `resetMinimal` <a name="resetMinimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal"></a>

```java
public void resetMinimal()
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity"></a>

```java
public void resetSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput">exclusivePackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput">minimalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput">securityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages">exclusivePackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal">minimal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security">security</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePackagesInput`<sup>Optional</sup> <a name="exclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput"></a>

```java
public java.util.List<java.lang.String> getExclusivePackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minimalInput`<sup>Optional</sup> <a name="minimalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput"></a>

```java
public java.lang.Object getMinimalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput"></a>

```java
public java.lang.Object getSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePackages`<sup>Required</sup> <a name="exclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages"></a>

```java
public java.util.List<java.lang.String> getExclusivePackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minimal`<sup>Required</sup> <a name="minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal"></a>

```java
public java.lang.Object getMinimal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security"></a>

```java
public java.lang.Object getSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigYum getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---


### OsConfigPatchDeploymentPatchConfigZypperOutputReference <a name="OsConfigPatchDeploymentPatchConfigZypperOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference;

new OsConfigPatchDeploymentPatchConfigZypperOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches">resetExclusivePatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional">resetWithOptional</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate">resetWithUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetExclusivePatches` <a name="resetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches"></a>

```java
public void resetExclusivePatches()
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities"></a>

```java
public void resetSeverities()
```

##### `resetWithOptional` <a name="resetWithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional"></a>

```java
public void resetWithOptional()
```

##### `resetWithUpdate` <a name="resetWithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate"></a>

```java
public void resetWithUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput">exclusivePatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput">withOptionalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput">withUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches">exclusivePatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional">withOptional</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate">withUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePatchesInput`<sup>Optional</sup> <a name="exclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput"></a>

```java
public java.util.List<java.lang.String> getExclusivePatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput"></a>

```java
public java.util.List<java.lang.String> getSeveritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `withOptionalInput`<sup>Optional</sup> <a name="withOptionalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput"></a>

```java
public java.lang.Object getWithOptionalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withUpdateInput`<sup>Optional</sup> <a name="withUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput"></a>

```java
public java.lang.Object getWithUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusivePatches`<sup>Required</sup> <a name="exclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches"></a>

```java
public java.util.List<java.lang.String> getExclusivePatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `withOptional`<sup>Required</sup> <a name="withOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional"></a>

```java
public java.lang.Object getWithOptional();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withUpdate`<sup>Required</sup> <a name="withUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate"></a>

```java
public java.lang.Object getWithUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentPatchConfigZypper getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference;

new OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth">putWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay">resetMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth">resetWeekDayOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayOfMonth` <a name="putWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth"></a>

```java
public void putWeekDayOfMonth(OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `resetMonthDay` <a name="resetMonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay"></a>

```java
public void resetMonthDay()
```

##### `resetWeekDayOfMonth` <a name="resetWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth"></a>

```java
public void resetWeekDayOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth">weekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput">monthDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput">weekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay">monthDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekDayOfMonth`<sup>Required</sup> <a name="weekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference getWeekDayOfMonth();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a>

---

##### `monthDayInput`<sup>Optional</sup> <a name="monthDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput"></a>

```java
public java.lang.Number getMonthDayInput();
```

- *Type:* java.lang.Number

---

##### `weekDayOfMonthInput`<sup>Optional</sup> <a name="weekDayOfMonthInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth getWeekDayOfMonthInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `monthDay`<sup>Required</sup> <a name="monthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay"></a>

```java
public java.lang.Number getMonthDay();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference;

new OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset">resetDayOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOffset` <a name="resetDayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset"></a>

```java
public void resetDayOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput">dayOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput">weekOrdinalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset">dayOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal">weekOrdinal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOffsetInput`<sup>Optional</sup> <a name="dayOffsetInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput"></a>

```java
public java.lang.Number getDayOffsetInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `weekOrdinalInput`<sup>Optional</sup> <a name="weekOrdinalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput"></a>

```java
public java.lang.Number getWeekOrdinalInput();
```

- *Type:* java.lang.Number

---

##### `dayOffset`<sup>Required</sup> <a name="dayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset"></a>

```java
public java.lang.Number getDayOffset();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `weekOrdinal`<sup>Required</sup> <a name="weekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal"></a>

```java
public java.lang.Number getWeekOrdinal();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---


### OsConfigPatchDeploymentRecurringScheduleOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleOutputReference;

new OsConfigPatchDeploymentRecurringScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay">putTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthly` <a name="putMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly"></a>

```java
public void putMonthly(OsConfigPatchDeploymentRecurringScheduleMonthly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `putTimeOfDay` <a name="putTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay"></a>

```java
public void putTimeOfDay(OsConfigPatchDeploymentRecurringScheduleTimeOfDay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone"></a>

```java
public void putTimeZone(OsConfigPatchDeploymentRecurringScheduleTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `putWeekly` <a name="putWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly"></a>

```java
public void putWeekly(OsConfigPatchDeploymentRecurringScheduleWeekly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly"></a>

```java
public void resetMonthly()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly"></a>

```java
public void resetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime">lastExecuteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime">nextExecuteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay">timeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput">monthlyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput">weeklyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastExecuteTime`<sup>Required</sup> <a name="lastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime"></a>

```java
public java.lang.String getLastExecuteTime();
```

- *Type:* java.lang.String

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference getMonthly();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a>

---

##### `nextExecuteTime`<sup>Required</sup> <a name="nextExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime"></a>

```java
public java.lang.String getNextExecuteTime();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference getTimeOfDay();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference getWeekly();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleMonthly getMonthlyInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay getTimeOfDayInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleWeekly getWeeklyInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference;

new OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference;

new OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---


### OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference;

new OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRecurringScheduleWeekly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---


### OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference <a name="OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference;

new OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRolloutDisruptionBudget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


### OsConfigPatchDeploymentRolloutOutputReference <a name="OsConfigPatchDeploymentRolloutOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentRolloutOutputReference;

new OsConfigPatchDeploymentRolloutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget">putDisruptionBudget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisruptionBudget` <a name="putDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget"></a>

```java
public void putDisruptionBudget(OsConfigPatchDeploymentRolloutDisruptionBudget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget">disruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput">disruptionBudgetInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disruptionBudget`<sup>Required</sup> <a name="disruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget"></a>

```java
public OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference getDisruptionBudget();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a>

---

##### `disruptionBudgetInput`<sup>Optional</sup> <a name="disruptionBudgetInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput"></a>

```java
public OsConfigPatchDeploymentRolloutDisruptionBudget getDisruptionBudgetInput();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue"></a>

```java
public OsConfigPatchDeploymentRollout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---


### OsConfigPatchDeploymentTimeoutsOutputReference <a name="OsConfigPatchDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_config_patch_deployment.OsConfigPatchDeploymentTimeoutsOutputReference;

new OsConfigPatchDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

---




# `gkeBackupBackupPlan` Submodule <a name="`gkeBackupBackupPlan` Submodule" id="@cdktf/provider-google.gkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupBackupPlan <a name="GkeBackupBackupPlan" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlan;

GkeBackupBackupPlan.Builder.create(Construct scope, java.lang.String id)
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backupConfig(GkeBackupBackupPlanBackupConfig)
//  .backupSchedule(GkeBackupBackupPlanBackupSchedule)
//  .deactivated(java.lang.Boolean)
//  .deactivated(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .retentionPolicy(GkeBackupBackupPlanRetentionPolicy)
//  .timeouts(GkeBackupBackupPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the Backup Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.backupConfig">backupConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.deactivated">deactivated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#cluster GkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#location GkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_config GkeBackupBackupPlan#backup_config}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.backupSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_schedule GkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.deactivated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#deactivated GkeBackupBackupPlan#deactivated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#description GkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#labels GkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#retention_policy GkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#timeouts GkeBackupBackupPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule">putBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule">resetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig"></a>

```java
public void putBackupConfig(GkeBackupBackupPlanBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `putBackupSchedule` <a name="putBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule"></a>

```java
public void putBackupSchedule(GkeBackupBackupPlanBackupSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(GkeBackupBackupPlanRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts"></a>

```java
public void putTimeouts(GkeBackupBackupPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---

##### `resetBackupConfig` <a name="resetBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig"></a>

```java
public void resetBackupConfig()
```

##### `resetBackupSchedule` <a name="resetBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule"></a>

```java
public void resetBackupSchedule()
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated"></a>

```java
public void resetDeactivated()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject"></a>

```java
public void resetProject()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupBackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlan;

GkeBackupBackupPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlan;

GkeBackupBackupPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlan;

GkeBackupBackupPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlan;

GkeBackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeBackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GkeBackupBackupPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeBackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount">protectedPodCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput">backupScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput">deactivatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig"></a>

```java
public GkeBackupBackupPlanBackupConfigOutputReference getBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule"></a>

```java
public GkeBackupBackupPlanBackupScheduleOutputReference getBackupSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `protectedPodCount`<sup>Required</sup> <a name="protectedPodCount" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount"></a>

```java
public java.lang.Number getProtectedPodCount();
```

- *Type:* java.lang.Number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy"></a>

```java
public GkeBackupBackupPlanRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts"></a>

```java
public GkeBackupBackupPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput"></a>

```java
public GkeBackupBackupPlanBackupConfig getBackupConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput"></a>

```java
public GkeBackupBackupPlanBackupSchedule getBackupScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput"></a>

```java
public java.lang.Object getDeactivatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput"></a>

```java
public GkeBackupBackupPlanRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated"></a>

```java
public java.lang.Object getDeactivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupBackupPlanBackupConfig <a name="GkeBackupBackupPlanBackupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfig;

GkeBackupBackupPlanBackupConfig.builder()
//  .allNamespaces(java.lang.Boolean)
//  .allNamespaces(IResolvable)
//  .encryptionKey(GkeBackupBackupPlanBackupConfigEncryptionKey)
//  .includeSecrets(java.lang.Boolean)
//  .includeSecrets(IResolvable)
//  .includeVolumeData(java.lang.Boolean)
//  .includeVolumeData(IResolvable)
//  .permissiveMode(java.lang.Boolean)
//  .permissiveMode(IResolvable)
//  .selectedApplications(GkeBackupBackupPlanBackupConfigSelectedApplications)
//  .selectedNamespaces(GkeBackupBackupPlanBackupConfigSelectedNamespaces)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces">allNamespaces</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets">includeSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData">includeVolumeData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.permissiveMode">permissiveMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `allNamespaces`<sup>Optional</sup> <a name="allNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```java
public java.lang.Object getAllNamespaces();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#all_namespaces GkeBackupBackupPlan#all_namespaces}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```java
public GkeBackupBackupPlanBackupConfigEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#encryption_key GkeBackupBackupPlan#encryption_key}

---

##### `includeSecrets`<sup>Optional</sup> <a name="includeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```java
public java.lang.Object getIncludeSecrets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#include_secrets GkeBackupBackupPlan#include_secrets}

---

##### `includeVolumeData`<sup>Optional</sup> <a name="includeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```java
public java.lang.Object getIncludeVolumeData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#include_volume_data GkeBackupBackupPlan#include_volume_data}

---

##### `permissiveMode`<sup>Optional</sup> <a name="permissiveMode" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.permissiveMode"></a>

```java
public java.lang.Object getPermissiveMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#permissive_mode GkeBackupBackupPlan#permissive_mode}

---

##### `selectedApplications`<sup>Optional</sup> <a name="selectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplications getSelectedApplications();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#selected_applications GkeBackupBackupPlan#selected_applications}

---

##### `selectedNamespaces`<sup>Optional</sup> <a name="selectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedNamespaces getSelectedNamespaces();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#selected_namespaces GkeBackupBackupPlan#selected_namespaces}

---

### GkeBackupBackupPlanBackupConfigEncryptionKey <a name="GkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigEncryptionKey;

GkeBackupBackupPlanBackupConfigEncryptionKey.builder()
    .gcpKmsEncryptionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>java.lang.String</code> | Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*. |

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```java
public java.lang.String getGcpKmsEncryptionKey();
```

- *Type:* java.lang.String

Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#gcp_kms_encryption_key GkeBackupBackupPlan#gcp_kms_encryption_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GkeBackupBackupPlanBackupConfigSelectedApplications <a name="GkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedApplications;

GkeBackupBackupPlanBackupConfigSelectedApplications.builder()
    .namespacedNames(IResolvable)
    .namespacedNames(java.util.List<GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">namespacedNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | namespaced_names block. |

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```java
public java.lang.Object getNamespacedNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#namespaced_names GkeBackupBackupPlan#namespaced_names}

---

### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames;

GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>java.lang.String</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#namespace GkeBackupBackupPlan#namespace}

---

### GkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedNamespaces;

GkeBackupBackupPlanBackupConfigSelectedNamespaces.builder()
    .namespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#namespaces GkeBackupBackupPlan#namespaces}

---

### GkeBackupBackupPlanBackupSchedule <a name="GkeBackupBackupPlanBackupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupSchedule;

GkeBackupBackupPlanBackupSchedule.builder()
//  .cronSchedule(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .rpoConfig(GkeBackupBackupPlanBackupScheduleRpoConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | rpo_config block. |

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

This is mutually exclusive with the rpoConfig field since at most one
schedule can be defined for a BackupPlan.
If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#cron_schedule GkeBackupBackupPlan#cron_schedule}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#paused GkeBackupBackupPlan#paused}

---

##### `rpoConfig`<sup>Optional</sup> <a name="rpoConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.rpoConfig"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfig getRpoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

rpo_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#rpo_config GkeBackupBackupPlan#rpo_config}

---

### GkeBackupBackupPlanBackupScheduleRpoConfig <a name="GkeBackupBackupPlanBackupScheduleRpoConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfig;

GkeBackupBackupPlanBackupScheduleRpoConfig.builder()
    .targetRpoMinutes(java.lang.Number)
//  .exclusionWindows(IResolvable)
//  .exclusionWindows(java.util.List<GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>java.lang.Number</code> | Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows">exclusionWindows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | exclusion_windows block. |

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes"></a>

```java
public java.lang.Number getTargetRpoMinutes();
```

- *Type:* java.lang.Number

Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan.

This must be
at least 60, i.e., 1 hour, and at most 86400, i.e., 60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#target_rpo_minutes GkeBackupBackupPlan#target_rpo_minutes}

---

##### `exclusionWindows`<sup>Optional</sup> <a name="exclusionWindows" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows"></a>

```java
public java.lang.Object getExclusionWindows();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

exclusion_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#exclusion_windows GkeBackupBackupPlan#exclusion_windows}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows;

GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.builder()
    .duration(java.lang.String)
    .startTime(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime)
//  .daily(java.lang.Boolean)
//  .daily(IResolvable)
//  .daysOfWeek(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek)
//  .singleOccurrenceDate(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration">duration</a></code> | <code>java.lang.String</code> | Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | start_time block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily">daily</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The exclusion window occurs every day if set to "True". |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | days_of_week block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | single_occurrence_date block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'.

Example: "3.5s". Restrictions for duration based on the
recurrence type to allow some time for backup to happen:

* single_occurrence_date:  no restriction
* daily window: duration < 24 hours
* weekly window:

  * days of week includes all seven days of a week: duration < 24 hours
  * all other weekly window: duration < 168 hours (i.e., 24 * 7 hours)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#duration GkeBackupBackupPlan#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#start_time GkeBackupBackupPlan#start_time}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily"></a>

```java
public java.lang.Object getDaily();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The exclusion window occurs every day if set to "True".

Specifying this field to "False" is an error.
Only one of singleOccurrenceDate, daily and daysOfWeek may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#daily GkeBackupBackupPlan#daily}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getDaysOfWeek();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}

---

##### `singleOccurrenceDate`<sup>Optional</sup> <a name="singleOccurrenceDate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getSingleOccurrenceDate();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

single_occurrence_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#single_occurrence_date GkeBackupBackupPlan#single_occurrence_date}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;

GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.builder()
//  .daysOfWeek(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;

GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#day GkeBackupBackupPlan#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#month GkeBackupBackupPlan#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#year GkeBackupBackupPlan#year}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;

GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#hours GkeBackupBackupPlan#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#minutes GkeBackupBackupPlan#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#nanos GkeBackupBackupPlan#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#seconds GkeBackupBackupPlan#seconds}

---

### GkeBackupBackupPlanConfig <a name="GkeBackupBackupPlanConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanConfig;

GkeBackupBackupPlanConfig.builder()
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backupConfig(GkeBackupBackupPlanBackupConfig)
//  .backupSchedule(GkeBackupBackupPlanBackupSchedule)
//  .deactivated(java.lang.Boolean)
//  .deactivated(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .retentionPolicy(GkeBackupBackupPlanRetentionPolicy)
//  .timeouts(GkeBackupBackupPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the Backup Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#cluster GkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#location GkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig"></a>

```java
public GkeBackupBackupPlanBackupConfig getBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_config GkeBackupBackupPlan#backup_config}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule"></a>

```java
public GkeBackupBackupPlanBackupSchedule getBackupSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_schedule GkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated"></a>

```java
public java.lang.Object getDeactivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#deactivated GkeBackupBackupPlan#deactivated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#description GkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#labels GkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```java
public GkeBackupBackupPlanRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#retention_policy GkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts"></a>

```java
public GkeBackupBackupPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#timeouts GkeBackupBackupPlan#timeouts}

---

### GkeBackupBackupPlanRetentionPolicy <a name="GkeBackupBackupPlanRetentionPolicy" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanRetentionPolicy;

GkeBackupBackupPlanRetentionPolicy.builder()
//  .backupDeleteLockDays(java.lang.Number)
//  .backupRetainDays(java.lang.Number)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>java.lang.Number</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">backupRetainDays</a></code> | <code>java.lang.Number</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `backupDeleteLockDays`<sup>Optional</sup> <a name="backupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```java
public java.lang.Number getBackupDeleteLockDays();
```

- *Type:* java.lang.Number

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_delete_lock_days GkeBackupBackupPlan#backup_delete_lock_days}

---

##### `backupRetainDays`<sup>Optional</sup> <a name="backupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```java
public java.lang.Number getBackupRetainDays();
```

- *Type:* java.lang.Number

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.
If rpo_config is defined, then this must be
<= 360 * targetRpoMinutes/(1440minutes/day)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#backup_retain_days GkeBackupBackupPlan#backup_retain_days}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#locked GkeBackupBackupPlan#locked}

---

### GkeBackupBackupPlanTimeouts <a name="GkeBackupBackupPlanTimeouts" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanTimeouts;

GkeBackupBackupPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#create GkeBackupBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#update GkeBackupBackupPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#create GkeBackupBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/gke_backup_backup_plan#update GkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference;

new GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">gcpKmsEncryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpKmsEncryptionKeyInput`<sup>Optional</sup> <a name="gcpKmsEncryptionKeyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```java
public java.lang.String getGcpKmsEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```java
public java.lang.String getGcpKmsEncryptionKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupConfigEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GkeBackupBackupPlanBackupConfigOutputReference <a name="GkeBackupBackupPlanBackupConfigOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigOutputReference;

new GkeBackupBackupPlanBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">putSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">putSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">resetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">resetIncludeSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">resetIncludeVolumeData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode">resetPermissiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">resetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">resetSelectedNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```java
public void putEncryptionKey(GkeBackupBackupPlanBackupConfigEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `putSelectedApplications` <a name="putSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```java
public void putSelectedApplications(GkeBackupBackupPlanBackupConfigSelectedApplications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `putSelectedNamespaces` <a name="putSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```java
public void putSelectedNamespaces(GkeBackupBackupPlanBackupConfigSelectedNamespaces value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `resetAllNamespaces` <a name="resetAllNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```java
public void resetAllNamespaces()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetIncludeSecrets` <a name="resetIncludeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```java
public void resetIncludeSecrets()
```

##### `resetIncludeVolumeData` <a name="resetIncludeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```java
public void resetIncludeVolumeData()
```

##### `resetPermissiveMode` <a name="resetPermissiveMode" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode"></a>

```java
public void resetPermissiveMode()
```

##### `resetSelectedApplications` <a name="resetSelectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```java
public void resetSelectedApplications()
```

##### `resetSelectedNamespaces` <a name="resetSelectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```java
public void resetSelectedNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">allNamespacesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">includeSecretsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">includeVolumeDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput">permissiveModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">selectedApplicationsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">selectedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">allNamespaces</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">includeSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">includeVolumeData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode">permissiveMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```java
public GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `selectedApplications`<sup>Required</sup> <a name="selectedApplications" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference getSelectedApplications();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `selectedNamespaces`<sup>Required</sup> <a name="selectedNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference getSelectedNamespaces();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `allNamespacesInput`<sup>Optional</sup> <a name="allNamespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```java
public java.lang.Object getAllNamespacesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```java
public GkeBackupBackupPlanBackupConfigEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `includeSecretsInput`<sup>Optional</sup> <a name="includeSecretsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```java
public java.lang.Object getIncludeSecretsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeVolumeDataInput`<sup>Optional</sup> <a name="includeVolumeDataInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```java
public java.lang.Object getIncludeVolumeDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveModeInput`<sup>Optional</sup> <a name="permissiveModeInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput"></a>

```java
public java.lang.Object getPermissiveModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `selectedApplicationsInput`<sup>Optional</sup> <a name="selectedApplicationsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplications getSelectedApplicationsInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `selectedNamespacesInput`<sup>Optional</sup> <a name="selectedNamespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedNamespaces getSelectedNamespacesInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `allNamespaces`<sup>Required</sup> <a name="allNamespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```java
public java.lang.Object getAllNamespaces();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSecrets`<sup>Required</sup> <a name="includeSecrets" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```java
public java.lang.Object getIncludeSecrets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeVolumeData`<sup>Required</sup> <a name="includeVolumeData" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```java
public java.lang.Object getIncludeVolumeData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissiveMode`<sup>Required</sup> <a name="permissiveMode" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode"></a>

```java
public java.lang.Object getPermissiveMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">putNamespacedNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespacedNames` <a name="putNamespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```java
public void putNamespacedNames(IResolvable OR java.util.List<GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">namespacedNames</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespacedNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList getNamespacedNames();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespacedNamesInput`<sup>Optional</sup> <a name="namespacedNamesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```java
public java.lang.Object getNamespacedNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedApplications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference;

new GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupConfigSelectedNamespaces getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GkeBackupBackupPlanBackupScheduleOutputReference <a name="GkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleOutputReference;

new GkeBackupBackupPlanBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig">putRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig">resetRpoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRpoConfig` <a name="putRpoConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig"></a>

```java
public void putRpoConfig(GkeBackupBackupPlanBackupScheduleRpoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetRpoConfig` <a name="resetRpoConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig"></a>

```java
public void resetRpoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput">rpoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoConfig`<sup>Required</sup> <a name="rpoConfig" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference getRpoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rpoConfigInput`<sup>Optional</sup> <a name="rpoConfigInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfig getRpoConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate">putSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate">resetSingleOccurrenceDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `putSingleOccurrenceDate` <a name="putSingleOccurrenceDate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate"></a>

```java
public void putSingleOccurrenceDate(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime"></a>

```java
public void putStartTime(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetSingleOccurrenceDate` <a name="resetSingleOccurrenceDate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate"></a>

```java
public void resetSingleOccurrenceDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput">dailyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput">singleOccurrenceDateInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily">daily</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference getDaysOfWeek();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a>

---

##### `singleOccurrenceDate`<sup>Required</sup> <a name="singleOccurrenceDate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference getSingleOccurrenceDate();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput"></a>

```java
public java.lang.Object getDailyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getDaysOfWeekInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `singleOccurrenceDateInput`<sup>Optional</sup> <a name="singleOccurrenceDateInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getSingleOccurrenceDateInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily"></a>

```java
public java.lang.Object getDaily();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference;

new GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows">putExclusionWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows">resetExclusionWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionWindows` <a name="putExclusionWindows" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows"></a>

```java
public void putExclusionWindows(IResolvable OR java.util.List<GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---

##### `resetExclusionWindows` <a name="resetExclusionWindows" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows"></a>

```java
public void resetExclusionWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows">exclusionWindows</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput">exclusionWindowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput">targetRpoMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionWindows`<sup>Required</sup> <a name="exclusionWindows" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList getExclusionWindows();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a>

---

##### `exclusionWindowsInput`<sup>Optional</sup> <a name="exclusionWindowsInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput"></a>

```java
public java.lang.Object getExclusionWindowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---

##### `targetRpoMinutesInput`<sup>Optional</sup> <a name="targetRpoMinutesInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput"></a>

```java
public java.lang.Number getTargetRpoMinutesInput();
```

- *Type:* java.lang.Number

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes"></a>

```java
public java.lang.Number getTargetRpoMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanBackupScheduleRpoConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---


### GkeBackupBackupPlanRetentionPolicyOutputReference <a name="GkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanRetentionPolicyOutputReference;

new GkeBackupBackupPlanRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">resetBackupDeleteLockDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">resetBackupRetainDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">resetLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupDeleteLockDays` <a name="resetBackupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```java
public void resetBackupDeleteLockDays()
```

##### `resetBackupRetainDays` <a name="resetBackupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```java
public void resetBackupRetainDays()
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```java
public void resetLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">backupDeleteLockDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">backupRetainDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">lockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">backupRetainDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDeleteLockDaysInput`<sup>Optional</sup> <a name="backupDeleteLockDaysInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```java
public java.lang.Number getBackupDeleteLockDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupRetainDaysInput`<sup>Optional</sup> <a name="backupRetainDaysInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```java
public java.lang.Number getBackupRetainDaysInput();
```

- *Type:* java.lang.Number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```java
public java.lang.Object getLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupDeleteLockDays`<sup>Required</sup> <a name="backupDeleteLockDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```java
public java.lang.Number getBackupDeleteLockDays();
```

- *Type:* java.lang.Number

---

##### `backupRetainDays`<sup>Required</sup> <a name="backupRetainDays" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```java
public java.lang.Number getBackupRetainDays();
```

- *Type:* java.lang.Number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```java
public GkeBackupBackupPlanRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---


### GkeBackupBackupPlanTimeoutsOutputReference <a name="GkeBackupBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gke_backup_backup_plan.GkeBackupBackupPlanTimeoutsOutputReference;

new GkeBackupBackupPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---




# `backupDrBackupPlanAssociation` Submodule <a name="`backupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.backupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlanAssociation <a name="BackupDrBackupPlanAssociation" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociation;

BackupDrBackupPlanAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .backupPlan(java.lang.String)
    .backupPlanAssociationId(java.lang.String)
    .location(java.lang.String)
    .resource(java.lang.String)
    .resourceType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrBackupPlanAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | The BP with which resource needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>java.lang.String</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resource">resource</a></code> | <code>java.lang.String</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of workload on which backupplan is applied. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlan"></a>

- *Type:* java.lang.String

The BP with which resource needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId"></a>

- *Type:* java.lang.String

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resource"></a>

- *Type:* java.lang.String

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

The resource type of workload on which backupplan is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts"></a>

```java
public void putTimeouts(BackupDrBackupPlanAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociation;

BackupDrBackupPlanAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociation;

BackupDrBackupPlanAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociation;

BackupDrBackupPlanAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociation;

BackupDrBackupPlanAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupDrBackupPlanAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupDrBackupPlanAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo">rulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">backupPlanAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput">backupPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```java
public java.lang.String getLastSuccessfulBackupConsistencyTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rulesConfigInfo`<sup>Required</sup> <a name="rulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfoList getRulesConfigInfo();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts"></a>

```java
public BackupDrBackupPlanAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `backupPlanAssociationIdInput`<sup>Optional</sup> <a name="backupPlanAssociationIdInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```java
public java.lang.String getBackupPlanAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput"></a>

```java
public java.lang.String getBackupPlanInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```java
public java.lang.String getBackupPlanAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanAssociationConfig <a name="BackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationConfig;

BackupDrBackupPlanAssociationConfig.builder()
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
    .backupPlan(java.lang.String)
    .backupPlanAssociationId(java.lang.String)
    .location(java.lang.String)
    .resource(java.lang.String)
    .resourceType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrBackupPlanAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | The BP with which resource needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>java.lang.String</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource">resource</a></code> | <code>java.lang.String</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of workload on which backupplan is applied. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

The BP with which resource needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```java
public java.lang.String getBackupPlanAssociationId();
```

- *Type:* java.lang.String

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The resource type of workload on which backupplan is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts"></a>

```java
public BackupDrBackupPlanAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

### BackupDrBackupPlanAssociationRulesConfigInfo <a name="BackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfo;

BackupDrBackupPlanAssociationRulesConfigInfo.builder()
    .build();
```


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError;

BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.builder()
    .build();
```


### BackupDrBackupPlanAssociationTimeouts <a name="BackupDrBackupPlanAssociationTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationTimeouts;

BackupDrBackupPlanAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList;

new BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference;

new BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### BackupDrBackupPlanAssociationRulesConfigInfoList <a name="BackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfoList;

new BackupDrBackupPlanAssociationRulesConfigInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference;

new BackupDrBackupPlanAssociationRulesConfigInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList getLastBackupError();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```java
public java.lang.String getLastBackupState();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```java
public BackupDrBackupPlanAssociationRulesConfigInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a>

---


### BackupDrBackupPlanAssociationTimeoutsOutputReference <a name="BackupDrBackupPlanAssociationTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.backup_dr_backup_plan_association.BackupDrBackupPlanAssociationTimeoutsOutputReference;

new BackupDrBackupPlanAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---




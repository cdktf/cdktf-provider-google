# `netappBackupVault` Submodule <a name="`netappBackupVault` Submodule" id="@cdktf/provider-google.netappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappBackupVault <a name="NetappBackupVault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault google_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVault;

NetappBackupVault.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .backupRegion(java.lang.String)
//  .backupRetentionPolicy(NetappBackupVaultBackupRetentionPolicy)
//  .backupVaultType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetappBackupVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRegion">backupRegion</a></code> | <code>java.lang.String</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupVaultType">backupVaultType</a></code> | <code>java.lang.String</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#location NetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#name NetappBackupVault#name}

---

##### `backupRegion`<sup>Optional</sup> <a name="backupRegion" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRegion"></a>

- *Type:* java.lang.String

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_region NetappBackupVault#backup_region}

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="backupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_retention_policy NetappBackupVault#backup_retention_policy}

---

##### `backupVaultType`<sup>Optional</sup> <a name="backupVaultType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupVaultType"></a>

- *Type:* java.lang.String

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_vault_type NetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#description NetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#labels NetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#timeouts NetappBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy">putBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRegion">resetBackupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRetentionPolicy">resetBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupVaultType">resetBackupVaultType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupRetentionPolicy` <a name="putBackupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy"></a>

```java
public void putBackupRetentionPolicy(NetappBackupVaultBackupRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts"></a>

```java
public void putTimeouts(NetappBackupVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

---

##### `resetBackupRegion` <a name="resetBackupRegion" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRegion"></a>

```java
public void resetBackupRegion()
```

##### `resetBackupRetentionPolicy` <a name="resetBackupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRetentionPolicy"></a>

```java
public void resetBackupRetentionPolicy()
```

##### `resetBackupVaultType` <a name="resetBackupVaultType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupVaultType"></a>

```java
public void resetBackupVaultType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVault;

NetappBackupVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVault;

NetappBackupVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVault;

NetappBackupVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVault;

NetappBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference">NetappBackupVaultBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.destinationBackupVault">destinationBackupVault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceBackupVault">sourceBackupVault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference">NetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegionInput">backupRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicyInput">backupRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultTypeInput">backupVaultTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegion">backupRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultType">backupVaultType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupRetentionPolicy`<sup>Required</sup> <a name="backupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicy"></a>

```java
public NetappBackupVaultBackupRetentionPolicyOutputReference getBackupRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference">NetappBackupVaultBackupRetentionPolicyOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destinationBackupVault`<sup>Required</sup> <a name="destinationBackupVault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.destinationBackupVault"></a>

```java
public java.lang.String getDestinationBackupVault();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `sourceBackupVault`<sup>Required</sup> <a name="sourceBackupVault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceBackupVault"></a>

```java
public java.lang.String getSourceBackupVault();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeouts"></a>

```java
public NetappBackupVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference">NetappBackupVaultTimeoutsOutputReference</a>

---

##### `backupRegionInput`<sup>Optional</sup> <a name="backupRegionInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegionInput"></a>

```java
public java.lang.String getBackupRegionInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionPolicyInput`<sup>Optional</sup> <a name="backupRetentionPolicyInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicyInput"></a>

```java
public NetappBackupVaultBackupRetentionPolicy getBackupRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

---

##### `backupVaultTypeInput`<sup>Optional</sup> <a name="backupVaultTypeInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultTypeInput"></a>

```java
public java.lang.String getBackupVaultTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

---

##### `backupRegion`<sup>Required</sup> <a name="backupRegion" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegion"></a>

```java
public java.lang.String getBackupRegion();
```

- *Type:* java.lang.String

---

##### `backupVaultType`<sup>Required</sup> <a name="backupVaultType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultType"></a>

```java
public java.lang.String getBackupVaultType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappBackupVaultBackupRetentionPolicy <a name="NetappBackupVaultBackupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVaultBackupRetentionPolicy;

NetappBackupVaultBackupRetentionPolicy.builder()
    .backupMinimumEnforcedRetentionDays(java.lang.Number)
//  .dailyBackupImmutable(java.lang.Boolean)
//  .dailyBackupImmutable(IResolvable)
//  .manualBackupImmutable(java.lang.Boolean)
//  .manualBackupImmutable(IResolvable)
//  .monthlyBackupImmutable(java.lang.Boolean)
//  .monthlyBackupImmutable(IResolvable)
//  .weeklyBackupImmutable(java.lang.Boolean)
//  .weeklyBackupImmutable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays">backupMinimumEnforcedRetentionDays</a></code> | <code>java.lang.Number</code> | Minimum retention duration in days for backups in the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable">dailyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable">manualBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable">monthlyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable">weeklyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |

---

##### `backupMinimumEnforcedRetentionDays`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDays" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays"></a>

```java
public java.lang.Number getBackupMinimumEnforcedRetentionDays();
```

- *Type:* java.lang.Number

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_minimum_enforced_retention_days NetappBackupVault#backup_minimum_enforced_retention_days}

---

##### `dailyBackupImmutable`<sup>Optional</sup> <a name="dailyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable"></a>

```java
public java.lang.Object getDailyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#daily_backup_immutable NetappBackupVault#daily_backup_immutable}

---

##### `manualBackupImmutable`<sup>Optional</sup> <a name="manualBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable"></a>

```java
public java.lang.Object getManualBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#manual_backup_immutable NetappBackupVault#manual_backup_immutable}

---

##### `monthlyBackupImmutable`<sup>Optional</sup> <a name="monthlyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable"></a>

```java
public java.lang.Object getMonthlyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#monthly_backup_immutable NetappBackupVault#monthly_backup_immutable}

---

##### `weeklyBackupImmutable`<sup>Optional</sup> <a name="weeklyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable"></a>

```java
public java.lang.Object getWeeklyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#weekly_backup_immutable NetappBackupVault#weekly_backup_immutable}

---

### NetappBackupVaultConfig <a name="NetappBackupVaultConfig" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVaultConfig;

NetappBackupVaultConfig.builder()
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
    .name(java.lang.String)
//  .backupRegion(java.lang.String)
//  .backupRetentionPolicy(NetappBackupVaultBackupRetentionPolicy)
//  .backupVaultType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetappBackupVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRegion">backupRegion</a></code> | <code>java.lang.String</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupVaultType">backupVaultType</a></code> | <code>java.lang.String</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#location NetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#name NetappBackupVault#name}

---

##### `backupRegion`<sup>Optional</sup> <a name="backupRegion" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRegion"></a>

```java
public java.lang.String getBackupRegion();
```

- *Type:* java.lang.String

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_region NetappBackupVault#backup_region}

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="backupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRetentionPolicy"></a>

```java
public NetappBackupVaultBackupRetentionPolicy getBackupRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_retention_policy NetappBackupVault#backup_retention_policy}

---

##### `backupVaultType`<sup>Optional</sup> <a name="backupVaultType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupVaultType"></a>

```java
public java.lang.String getBackupVaultType();
```

- *Type:* java.lang.String

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#backup_vault_type NetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#description NetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#labels NetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.timeouts"></a>

```java
public NetappBackupVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#timeouts NetappBackupVault#timeouts}

---

### NetappBackupVaultTimeouts <a name="NetappBackupVaultTimeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVaultTimeouts;

NetappBackupVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappBackupVaultBackupRetentionPolicyOutputReference <a name="NetappBackupVaultBackupRetentionPolicyOutputReference" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVaultBackupRetentionPolicyOutputReference;

new NetappBackupVaultBackupRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable">resetDailyBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable">resetManualBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable">resetMonthlyBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable">resetWeeklyBackupImmutable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDailyBackupImmutable` <a name="resetDailyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable"></a>

```java
public void resetDailyBackupImmutable()
```

##### `resetManualBackupImmutable` <a name="resetManualBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable"></a>

```java
public void resetManualBackupImmutable()
```

##### `resetMonthlyBackupImmutable` <a name="resetMonthlyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable"></a>

```java
public void resetMonthlyBackupImmutable()
```

##### `resetWeeklyBackupImmutable` <a name="resetWeeklyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable"></a>

```java
public void resetWeeklyBackupImmutable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput">backupMinimumEnforcedRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput">dailyBackupImmutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput">manualBackupImmutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput">monthlyBackupImmutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput">weeklyBackupImmutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays">backupMinimumEnforcedRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable">dailyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable">manualBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable">monthlyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable">weeklyBackupImmutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupMinimumEnforcedRetentionDaysInput`<sup>Optional</sup> <a name="backupMinimumEnforcedRetentionDaysInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput"></a>

```java
public java.lang.Number getBackupMinimumEnforcedRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `dailyBackupImmutableInput`<sup>Optional</sup> <a name="dailyBackupImmutableInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput"></a>

```java
public java.lang.Object getDailyBackupImmutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualBackupImmutableInput`<sup>Optional</sup> <a name="manualBackupImmutableInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput"></a>

```java
public java.lang.Object getManualBackupImmutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monthlyBackupImmutableInput`<sup>Optional</sup> <a name="monthlyBackupImmutableInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput"></a>

```java
public java.lang.Object getMonthlyBackupImmutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `weeklyBackupImmutableInput`<sup>Optional</sup> <a name="weeklyBackupImmutableInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput"></a>

```java
public java.lang.Object getWeeklyBackupImmutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupMinimumEnforcedRetentionDays`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDays" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays"></a>

```java
public java.lang.Number getBackupMinimumEnforcedRetentionDays();
```

- *Type:* java.lang.Number

---

##### `dailyBackupImmutable`<sup>Required</sup> <a name="dailyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable"></a>

```java
public java.lang.Object getDailyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualBackupImmutable`<sup>Required</sup> <a name="manualBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable"></a>

```java
public java.lang.Object getManualBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monthlyBackupImmutable`<sup>Required</sup> <a name="monthlyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable"></a>

```java
public java.lang.Object getMonthlyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `weeklyBackupImmutable`<sup>Required</sup> <a name="weeklyBackupImmutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable"></a>

```java
public java.lang.Object getWeeklyBackupImmutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue"></a>

```java
public NetappBackupVaultBackupRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

---


### NetappBackupVaultTimeoutsOutputReference <a name="NetappBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_backup_vault.NetappBackupVaultTimeoutsOutputReference;

new NetappBackupVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

---




# `netappStoragePool` Submodule <a name="`netappStoragePool` Submodule" id="@cdktf/provider-google.netappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappStoragePool <a name="NetappStoragePool" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePool;

NetappStoragePool.Builder.create(Construct scope, java.lang.String id)
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
    .capacityGib(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceLevel(java.lang.String)
//  .activeDirectory(java.lang.String)
//  .allowAutoTiering(java.lang.Boolean)
//  .allowAutoTiering(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .kmsConfig(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapEnabled(java.lang.Boolean)
//  .ldapEnabled(IResolvable)
//  .project(java.lang.String)
//  .timeouts(NetappStoragePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.activeDirectory">activeDirectory</a></code> | <code>java.lang.String</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.allowAutoTiering">allowAutoTiering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.kmsConfig">kmsConfig</a></code> | <code>java.lang.String</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.ldapEnabled">ldapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.capacityGib"></a>

- *Type:* java.lang.String

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.network"></a>

- *Type:* java.lang.String

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.serviceLevel"></a>

- *Type:* java.lang.String

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.activeDirectory"></a>

- *Type:* java.lang.String

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `allowAutoTiering`<sup>Optional</sup> <a name="allowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.allowAutoTiering"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsConfig`<sup>Optional</sup> <a name="kmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.kmsConfig"></a>

- *Type:* java.lang.String

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `ldapEnabled`<sup>Optional</sup> <a name="ldapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.ldapEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering">resetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig">resetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled">resetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts"></a>

```java
public void putTimeouts(NetappStoragePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory"></a>

```java
public void resetActiveDirectory()
```

##### `resetAllowAutoTiering` <a name="resetAllowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering"></a>

```java
public void resetAllowAutoTiering()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId"></a>

```java
public void resetId()
```

##### `resetKmsConfig` <a name="resetKmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig"></a>

```java
public void resetKmsConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLdapEnabled` <a name="resetLdapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled"></a>

```java
public void resetLdapEnabled()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePool;

NetappStoragePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePool;

NetappStoragePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePool;

NetappStoragePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePool;

NetappStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib">volumeCapacityGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount">volumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput">allowAutoTieringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput">capacityGibInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput">kmsConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput">ldapEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput">serviceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory">activeDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering">allowAutoTiering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig">kmsConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled">ldapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts"></a>

```java
public NetappStoragePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a>

---

##### `volumeCapacityGib`<sup>Required</sup> <a name="volumeCapacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib"></a>

```java
public java.lang.String getVolumeCapacityGib();
```

- *Type:* java.lang.String

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount"></a>

```java
public java.lang.Number getVolumeCount();
```

- *Type:* java.lang.Number

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput"></a>

```java
public java.lang.String getActiveDirectoryInput();
```

- *Type:* java.lang.String

---

##### `allowAutoTieringInput`<sup>Optional</sup> <a name="allowAutoTieringInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput"></a>

```java
public java.lang.Object getAllowAutoTieringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput"></a>

```java
public java.lang.String getCapacityGibInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsConfigInput`<sup>Optional</sup> <a name="kmsConfigInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput"></a>

```java
public java.lang.String getKmsConfigInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapEnabledInput`<sup>Optional</sup> <a name="ldapEnabledInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput"></a>

```java
public java.lang.Object getLdapEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput"></a>

```java
public java.lang.String getServiceLevelInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory"></a>

```java
public java.lang.String getActiveDirectory();
```

- *Type:* java.lang.String

---

##### `allowAutoTiering`<sup>Required</sup> <a name="allowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering"></a>

```java
public java.lang.Object getAllowAutoTiering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig"></a>

```java
public java.lang.String getKmsConfig();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled"></a>

```java
public java.lang.Object getLdapEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappStoragePoolConfig <a name="NetappStoragePoolConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePoolConfig;

NetappStoragePoolConfig.builder()
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
    .capacityGib(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceLevel(java.lang.String)
//  .activeDirectory(java.lang.String)
//  .allowAutoTiering(java.lang.Boolean)
//  .allowAutoTiering(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .kmsConfig(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapEnabled(java.lang.Boolean)
//  .ldapEnabled(IResolvable)
//  .project(java.lang.String)
//  .timeouts(NetappStoragePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network">network</a></code> | <code>java.lang.String</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory">activeDirectory</a></code> | <code>java.lang.String</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering">allowAutoTiering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig">kmsConfig</a></code> | <code>java.lang.String</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled">ldapEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory"></a>

```java
public java.lang.String getActiveDirectory();
```

- *Type:* java.lang.String

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `allowAutoTiering`<sup>Optional</sup> <a name="allowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering"></a>

```java
public java.lang.Object getAllowAutoTiering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsConfig`<sup>Optional</sup> <a name="kmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig"></a>

```java
public java.lang.String getKmsConfig();
```

- *Type:* java.lang.String

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `ldapEnabled`<sup>Optional</sup> <a name="ldapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled"></a>

```java
public java.lang.Object getLdapEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts"></a>

```java
public NetappStoragePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

### NetappStoragePoolTimeouts <a name="NetappStoragePoolTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePoolTimeouts;

NetappStoragePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappStoragePoolTimeoutsOutputReference <a name="NetappStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_storage_pool.NetappStoragePoolTimeoutsOutputReference;

new NetappStoragePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---




# `google_memcache_instance`

Refer to the Terraform Registory for docs: [`google_memcache_instance`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance).

# `memcacheInstance` Submodule <a name="`memcacheInstance` Submodule" id="@cdktf/provider-google.memcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemcacheInstance <a name="MemcacheInstance" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstance;

MemcacheInstance.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .nodeConfig(MemcacheInstanceNodeConfig)
    .nodeCount(java.lang.Number)
//  .authorizedNetwork(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(MemcacheInstanceMaintenancePolicy)
//  .memcacheParameters(MemcacheInstanceMemcacheParameters)
//  .memcacheVersion(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(MemcacheInstanceTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.authorizedNetwork">authorizedNetwork</a></code> | <code>java.lang.String</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#id MemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.memcacheVersion">memcacheVersion</a></code> | <code>java.lang.String</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#project MemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#name MemcacheInstance#name}

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#node_config MemcacheInstance#node_config}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#node_count MemcacheInstance#node_count}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.authorizedNetwork"></a>

- *Type:* java.lang.String

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#authorized_network MemcacheInstance#authorized_network}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#display_name MemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#id MemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#labels MemcacheInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#maintenance_policy MemcacheInstance#maintenance_policy}

---

##### `memcacheParameters`<sup>Optional</sup> <a name="memcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.memcacheParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}

---

##### `memcacheVersion`<sup>Optional</sup> <a name="memcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.memcacheVersion"></a>

- *Type:* java.lang.String

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#memcache_version MemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#project MemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#region MemcacheInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#timeouts MemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#zones MemcacheInstance#zones}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters">putMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters">resetMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion">resetMemcacheVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(MemcacheInstanceMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `putMemcacheParameters` <a name="putMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters"></a>

```java
public void putMemcacheParameters(MemcacheInstanceMemcacheParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig"></a>

```java
public void putNodeConfig(MemcacheInstanceNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts"></a>

```java
public void putTimeouts(MemcacheInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork"></a>

```java
public void resetAuthorizedNetwork()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetMemcacheParameters` <a name="resetMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters"></a>

```java
public void resetMemcacheParameters()
```

##### `resetMemcacheVersion` <a name="resetMemcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion"></a>

```java
public void resetMemcacheVersion()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstance;

MemcacheInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstance;

MemcacheInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstance;

MemcacheInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint">discoveryEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion">memcacheFullVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes">memcacheNodes</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput">memcacheParametersInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput">memcacheVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork">authorizedNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion">memcacheVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `discoveryEndpoint`<sup>Required</sup> <a name="discoveryEndpoint" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint"></a>

```java
public java.lang.String getDiscoveryEndpoint();
```

- *Type:* java.lang.String

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy"></a>

```java
public MemcacheInstanceMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule"></a>

```java
public MemcacheInstanceMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a>

---

##### `memcacheFullVersion`<sup>Required</sup> <a name="memcacheFullVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion"></a>

```java
public java.lang.String getMemcacheFullVersion();
```

- *Type:* java.lang.String

---

##### `memcacheNodes`<sup>Required</sup> <a name="memcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes"></a>

```java
public MemcacheInstanceMemcacheNodesList getMemcacheNodes();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a>

---

##### `memcacheParameters`<sup>Required</sup> <a name="memcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters"></a>

```java
public MemcacheInstanceMemcacheParametersOutputReference getMemcacheParameters();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig"></a>

```java
public MemcacheInstanceNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts"></a>

```java
public MemcacheInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a>

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput"></a>

```java
public java.lang.String getAuthorizedNetworkInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput"></a>

```java
public MemcacheInstanceMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `memcacheParametersInput`<sup>Optional</sup> <a name="memcacheParametersInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput"></a>

```java
public MemcacheInstanceMemcacheParameters getMemcacheParametersInput();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `memcacheVersionInput`<sup>Optional</sup> <a name="memcacheVersionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput"></a>

```java
public java.lang.String getMemcacheVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput"></a>

```java
public MemcacheInstanceNodeConfig getNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork"></a>

```java
public java.lang.String getAuthorizedNetwork();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memcacheVersion`<sup>Required</sup> <a name="memcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion"></a>

```java
public java.lang.String getMemcacheVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MemcacheInstanceConfig <a name="MemcacheInstanceConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceConfig;

MemcacheInstanceConfig.builder()
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
    .name(java.lang.String)
    .nodeConfig(MemcacheInstanceNodeConfig)
    .nodeCount(java.lang.Number)
//  .authorizedNetwork(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(MemcacheInstanceMaintenancePolicy)
//  .memcacheParameters(MemcacheInstanceMemcacheParameters)
//  .memcacheVersion(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(MemcacheInstanceTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>java.lang.String</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#id MemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion">memcacheVersion</a></code> | <code>java.lang.String</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#project MemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#name MemcacheInstance#name}

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig"></a>

```java
public MemcacheInstanceNodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#node_config MemcacheInstance#node_config}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#node_count MemcacheInstance#node_count}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork"></a>

```java
public java.lang.String getAuthorizedNetwork();
```

- *Type:* java.lang.String

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#authorized_network MemcacheInstance#authorized_network}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#display_name MemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#id MemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#labels MemcacheInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy"></a>

```java
public MemcacheInstanceMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#maintenance_policy MemcacheInstance#maintenance_policy}

---

##### `memcacheParameters`<sup>Optional</sup> <a name="memcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters"></a>

```java
public MemcacheInstanceMemcacheParameters getMemcacheParameters();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}

---

##### `memcacheVersion`<sup>Optional</sup> <a name="memcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion"></a>

```java
public java.lang.String getMemcacheVersion();
```

- *Type:* java.lang.String

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#memcache_version MemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#project MemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#region MemcacheInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts"></a>

```java
public MemcacheInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#timeouts MemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#zones MemcacheInstance#zones}

---

### MemcacheInstanceMaintenancePolicy <a name="MemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicy;

MemcacheInstanceMaintenancePolicy.builder()
    .weeklyMaintenanceWindow(IResolvable)
    .weeklyMaintenanceWindow(java.util.List<MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | weekly_maintenance_window block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#weekly_maintenance_window MemcacheInstance#weekly_maintenance_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#description MemcacheInstance#description}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow;

MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.builder()
    .day(java.lang.String)
    .duration(java.lang.String)
    .startTime(MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration">duration</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Required.

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#day MemcacheInstance#day}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Required.

The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#duration MemcacheInstance#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#start_time MemcacheInstance#start_time}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;

MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#hours MemcacheInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#minutes MemcacheInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#nanos MemcacheInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#seconds MemcacheInstance#seconds}

---

### MemcacheInstanceMaintenanceSchedule <a name="MemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenanceSchedule;

MemcacheInstanceMaintenanceSchedule.builder()
    .build();
```


### MemcacheInstanceMemcacheNodes <a name="MemcacheInstanceMemcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMemcacheNodes;

MemcacheInstanceMemcacheNodes.builder()
    .build();
```


### MemcacheInstanceMemcacheParameters <a name="MemcacheInstanceMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMemcacheParameters;

MemcacheInstanceMemcacheParameters.builder()
//  .params(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined set of parameters to use in the memcache process. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#params MemcacheInstance#params}

---

### MemcacheInstanceNodeConfig <a name="MemcacheInstanceNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceNodeConfig;

MemcacheInstanceNodeConfig.builder()
    .cpuCount(java.lang.Number)
    .memorySizeMb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | Number of CPUs per node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb">memorySizeMb</a></code> | <code>java.lang.Number</code> | Memory size in Mebibytes for each memcache node. |

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

Number of CPUs per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#cpu_count MemcacheInstance#cpu_count}

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb"></a>

```java
public java.lang.Number getMemorySizeMb();
```

- *Type:* java.lang.Number

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#memory_size_mb MemcacheInstance#memory_size_mb}

---

### MemcacheInstanceTimeouts <a name="MemcacheInstanceTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceTimeouts;

MemcacheInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#create MemcacheInstance#create}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#delete MemcacheInstance#delete}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#update MemcacheInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#create MemcacheInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#delete MemcacheInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/memcache_instance#update MemcacheInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemcacheInstanceMaintenancePolicyOutputReference <a name="MemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyOutputReference;

new MemcacheInstanceMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```java
public void putWeeklyMaintenanceWindow(IResolvable OR java.util.List<MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList getWeeklyMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList;

new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference;

new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;

new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### MemcacheInstanceMaintenanceScheduleList <a name="MemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenanceScheduleList;

new MemcacheInstanceMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get"></a>

```java
public MemcacheInstanceMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemcacheInstanceMaintenanceScheduleOutputReference <a name="MemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMaintenanceScheduleOutputReference;

new MemcacheInstanceMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```java
public java.lang.String getScheduleDeadlineTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a>

---


### MemcacheInstanceMemcacheNodesList <a name="MemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMemcacheNodesList;

new MemcacheInstanceMemcacheNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get"></a>

```java
public MemcacheInstanceMemcacheNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemcacheInstanceMemcacheNodesOutputReference <a name="MemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMemcacheNodesOutputReference;

new MemcacheInstanceMemcacheNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceMemcacheNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a>

---


### MemcacheInstanceMemcacheParametersOutputReference <a name="MemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceMemcacheParametersOutputReference;

new MemcacheInstanceMemcacheParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams"></a>

```java
public void resetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput">paramsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceMemcacheParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---


### MemcacheInstanceNodeConfigOutputReference <a name="MemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceNodeConfigOutputReference;

new MemcacheInstanceNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput">memorySizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">memorySizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput"></a>

```java
public java.lang.Number getCpuCountInput();
```

- *Type:* java.lang.Number

---

##### `memorySizeMbInput`<sup>Optional</sup> <a name="memorySizeMbInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput"></a>

```java
public java.lang.Number getMemorySizeMbInput();
```

- *Type:* java.lang.Number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```java
public java.lang.Number getMemorySizeMb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```java
public MemcacheInstanceNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---


### MemcacheInstanceTimeoutsOutputReference <a name="MemcacheInstanceTimeoutsOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memcache_instance.MemcacheInstanceTimeoutsOutputReference;

new MemcacheInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---




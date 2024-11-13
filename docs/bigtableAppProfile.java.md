# `bigtableAppProfile` Submodule <a name="`bigtableAppProfile` Submodule" id="@cdktf/provider-google.bigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAppProfile <a name="BigtableAppProfile" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfile;

BigtableAppProfile.Builder.create(Construct scope, java.lang.String id)
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
    .appProfileId(java.lang.String)
//  .dataBoostIsolationReadOnly(BigtableAppProfileDataBoostIsolationReadOnly)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .instance(java.lang.String)
//  .multiClusterRoutingClusterIds(java.util.List<java.lang.String>)
//  .multiClusterRoutingUseAny(java.lang.Boolean)
//  .multiClusterRoutingUseAny(IResolvable)
//  .project(java.lang.String)
//  .singleClusterRouting(BigtableAppProfileSingleClusterRouting)
//  .standardIsolation(BigtableAppProfileStandardIsolation)
//  .timeouts(BigtableAppProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.appProfileId">appProfileId</a></code> | <code>java.lang.String</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.dataBoostIsolationReadOnly">dataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.multiClusterRoutingClusterIds">multiClusterRoutingClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.multiClusterRoutingUseAny">multiClusterRoutingUseAny</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.singleClusterRouting">singleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.standardIsolation">standardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appProfileId`<sup>Required</sup> <a name="appProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.appProfileId"></a>

- *Type:* java.lang.String

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}

---

##### `dataBoostIsolationReadOnly`<sup>Optional</sup> <a name="dataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.dataBoostIsolationReadOnly"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.ignoreWarnings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}

---

##### `multiClusterRoutingClusterIds`<sup>Optional</sup> <a name="multiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.multiClusterRoutingClusterIds"></a>

- *Type:* java.util.List<java.lang.String>

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `multiClusterRoutingUseAny`<sup>Optional</sup> <a name="multiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.multiClusterRoutingUseAny"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}.

---

##### `singleClusterRouting`<sup>Optional</sup> <a name="singleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.singleClusterRouting"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}

---

##### `standardIsolation`<sup>Optional</sup> <a name="standardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.standardIsolation"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly">putDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting">putSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation">putStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly">resetDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds">resetMultiClusterRoutingClusterIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny">resetMultiClusterRoutingUseAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting">resetSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation">resetStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataBoostIsolationReadOnly` <a name="putDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```java
public void putDataBoostIsolationReadOnly(BigtableAppProfileDataBoostIsolationReadOnly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `putSingleClusterRouting` <a name="putSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting"></a>

```java
public void putSingleClusterRouting(BigtableAppProfileSingleClusterRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `putStandardIsolation` <a name="putStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation"></a>

```java
public void putStandardIsolation(BigtableAppProfileStandardIsolation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts"></a>

```java
public void putTimeouts(BigtableAppProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `resetDataBoostIsolationReadOnly` <a name="resetDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```java
public void resetDataBoostIsolationReadOnly()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings"></a>

```java
public void resetIgnoreWarnings()
```

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetMultiClusterRoutingClusterIds` <a name="resetMultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```java
public void resetMultiClusterRoutingClusterIds()
```

##### `resetMultiClusterRoutingUseAny` <a name="resetMultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```java
public void resetMultiClusterRoutingUseAny()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject"></a>

```java
public void resetProject()
```

##### `resetSingleClusterRouting` <a name="resetSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting"></a>

```java
public void resetSingleClusterRouting()
```

##### `resetStandardIsolation` <a name="resetStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation"></a>

```java
public void resetStandardIsolation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfile;

BigtableAppProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfile;

BigtableAppProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfile;

BigtableAppProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfile;

BigtableAppProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigtableAppProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigtableAppProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly">dataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting">singleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation">standardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput">appProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput">dataBoostIsolationReadOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput">multiClusterRoutingClusterIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput">multiClusterRoutingUseAnyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput">singleClusterRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput">standardIsolationInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId">appProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds">multiClusterRoutingClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny">multiClusterRoutingUseAny</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataBoostIsolationReadOnly`<sup>Required</sup> <a name="dataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```java
public BigtableAppProfileDataBoostIsolationReadOnlyOutputReference getDataBoostIsolationReadOnly();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `singleClusterRouting`<sup>Required</sup> <a name="singleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting"></a>

```java
public BigtableAppProfileSingleClusterRoutingOutputReference getSingleClusterRouting();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `standardIsolation`<sup>Required</sup> <a name="standardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation"></a>

```java
public BigtableAppProfileStandardIsolationOutputReference getStandardIsolation();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts"></a>

```java
public BigtableAppProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a>

---

##### `appProfileIdInput`<sup>Optional</sup> <a name="appProfileIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput"></a>

```java
public java.lang.String getAppProfileIdInput();
```

- *Type:* java.lang.String

---

##### `dataBoostIsolationReadOnlyInput`<sup>Optional</sup> <a name="dataBoostIsolationReadOnlyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```java
public BigtableAppProfileDataBoostIsolationReadOnly getDataBoostIsolationReadOnlyInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput"></a>

```java
public java.lang.Object getIgnoreWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `multiClusterRoutingClusterIdsInput`<sup>Optional</sup> <a name="multiClusterRoutingClusterIdsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```java
public java.util.List<java.lang.String> getMultiClusterRoutingClusterIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multiClusterRoutingUseAnyInput`<sup>Optional</sup> <a name="multiClusterRoutingUseAnyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```java
public java.lang.Object getMultiClusterRoutingUseAnyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `singleClusterRoutingInput`<sup>Optional</sup> <a name="singleClusterRoutingInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput"></a>

```java
public BigtableAppProfileSingleClusterRouting getSingleClusterRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `standardIsolationInput`<sup>Optional</sup> <a name="standardIsolationInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput"></a>

```java
public BigtableAppProfileStandardIsolation getStandardIsolationInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `appProfileId`<sup>Required</sup> <a name="appProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId"></a>

```java
public java.lang.String getAppProfileId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `multiClusterRoutingClusterIds`<sup>Required</sup> <a name="multiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```java
public java.util.List<java.lang.String> getMultiClusterRoutingClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multiClusterRoutingUseAny`<sup>Required</sup> <a name="multiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```java
public java.lang.Object getMultiClusterRoutingUseAny();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAppProfileConfig <a name="BigtableAppProfileConfig" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileConfig;

BigtableAppProfileConfig.builder()
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
    .appProfileId(java.lang.String)
//  .dataBoostIsolationReadOnly(BigtableAppProfileDataBoostIsolationReadOnly)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .instance(java.lang.String)
//  .multiClusterRoutingClusterIds(java.util.List<java.lang.String>)
//  .multiClusterRoutingUseAny(java.lang.Boolean)
//  .multiClusterRoutingUseAny(IResolvable)
//  .project(java.lang.String)
//  .singleClusterRouting(BigtableAppProfileSingleClusterRouting)
//  .standardIsolation(BigtableAppProfileStandardIsolation)
//  .timeouts(BigtableAppProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId">appProfileId</a></code> | <code>java.lang.String</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly">dataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds">multiClusterRoutingClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny">multiClusterRoutingUseAny</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting">singleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation">standardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appProfileId`<sup>Required</sup> <a name="appProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId"></a>

```java
public java.lang.String getAppProfileId();
```

- *Type:* java.lang.String

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}

---

##### `dataBoostIsolationReadOnly`<sup>Optional</sup> <a name="dataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```java
public BigtableAppProfileDataBoostIsolationReadOnly getDataBoostIsolationReadOnly();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}

---

##### `multiClusterRoutingClusterIds`<sup>Optional</sup> <a name="multiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```java
public java.util.List<java.lang.String> getMultiClusterRoutingClusterIds();
```

- *Type:* java.util.List<java.lang.String>

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `multiClusterRoutingUseAny`<sup>Optional</sup> <a name="multiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```java
public java.lang.Object getMultiClusterRoutingUseAny();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}.

---

##### `singleClusterRouting`<sup>Optional</sup> <a name="singleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting"></a>

```java
public BigtableAppProfileSingleClusterRouting getSingleClusterRouting();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}

---

##### `standardIsolation`<sup>Optional</sup> <a name="standardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation"></a>

```java
public BigtableAppProfileStandardIsolation getStandardIsolation();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts"></a>

```java
public BigtableAppProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}

---

### BigtableAppProfileDataBoostIsolationReadOnly <a name="BigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileDataBoostIsolationReadOnly;

BigtableAppProfileDataBoostIsolationReadOnly.builder()
    .computeBillingOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">computeBillingOwner</a></code> | <code>java.lang.String</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `computeBillingOwner`<sup>Required</sup> <a name="computeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```java
public java.lang.String getComputeBillingOwner();
```

- *Type:* java.lang.String

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#compute_billing_owner BigtableAppProfile#compute_billing_owner}

---

### BigtableAppProfileSingleClusterRouting <a name="BigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileSingleClusterRouting;

BigtableAppProfileSingleClusterRouting.builder()
    .clusterId(java.lang.String)
//  .allowTransactionalWrites(java.lang.Boolean)
//  .allowTransactionalWrites(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">allowTransactionalWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#cluster_id BigtableAppProfile#cluster_id}

---

##### `allowTransactionalWrites`<sup>Optional</sup> <a name="allowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```java
public java.lang.Object getAllowTransactionalWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}

---

### BigtableAppProfileStandardIsolation <a name="BigtableAppProfileStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileStandardIsolation;

BigtableAppProfileStandardIsolation.builder()
    .priority(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority">priority</a></code> | <code>java.lang.String</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#priority BigtableAppProfile#priority}

---

### BigtableAppProfileTimeouts <a name="BigtableAppProfileTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileTimeouts;

BigtableAppProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="BigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference;

new BigtableAppProfileDataBoostIsolationReadOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">computeBillingOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">computeBillingOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeBillingOwnerInput`<sup>Optional</sup> <a name="computeBillingOwnerInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```java
public java.lang.String getComputeBillingOwnerInput();
```

- *Type:* java.lang.String

---

##### `computeBillingOwner`<sup>Required</sup> <a name="computeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```java
public java.lang.String getComputeBillingOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```java
public BigtableAppProfileDataBoostIsolationReadOnly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---


### BigtableAppProfileSingleClusterRoutingOutputReference <a name="BigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileSingleClusterRoutingOutputReference;

new BigtableAppProfileSingleClusterRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">resetAllowTransactionalWrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowTransactionalWrites` <a name="resetAllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```java
public void resetAllowTransactionalWrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">allowTransactionalWritesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">allowTransactionalWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowTransactionalWritesInput`<sup>Optional</sup> <a name="allowTransactionalWritesInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```java
public java.lang.Object getAllowTransactionalWritesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `allowTransactionalWrites`<sup>Required</sup> <a name="allowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```java
public java.lang.Object getAllowTransactionalWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```java
public BigtableAppProfileSingleClusterRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---


### BigtableAppProfileStandardIsolationOutputReference <a name="BigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileStandardIsolationOutputReference;

new BigtableAppProfileStandardIsolationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```java
public BigtableAppProfileStandardIsolation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---


### BigtableAppProfileTimeoutsOutputReference <a name="BigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_app_profile.BigtableAppProfileTimeoutsOutputReference;

new BigtableAppProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---




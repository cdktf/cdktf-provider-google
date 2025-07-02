# `parallelstoreInstance` Submodule <a name="`parallelstoreInstance` Submodule" id="@cdktf/provider-google.parallelstoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParallelstoreInstance <a name="ParallelstoreInstance" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance google_parallelstore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstance;

ParallelstoreInstance.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .directoryStripeLevel(java.lang.String)
//  .fileStripeLevel(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .reservedIpRange(java.lang.String)
//  .timeouts(ParallelstoreInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#id ParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#project ParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.capacityGib"></a>

- *Type:* java.lang.String

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#capacity_gib ParallelstoreInstance#capacity_gib}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.

  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#instance_id ParallelstoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#location ParallelstoreInstance#location}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#deployment_type ParallelstoreInstance#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#description ParallelstoreInstance#description}

---

##### `directoryStripeLevel`<sup>Optional</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.directoryStripeLevel"></a>

- *Type:* java.lang.String

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
Possible values:
DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
DIRECTORY_STRIPE_LEVEL_MIN
DIRECTORY_STRIPE_LEVEL_BALANCED
DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#directory_stripe_level ParallelstoreInstance#directory_stripe_level}

---

##### `fileStripeLevel`<sup>Optional</sup> <a name="fileStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.fileStripeLevel"></a>

- *Type:* java.lang.String

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
Possible values:
FILE_STRIPE_LEVEL_UNSPECIFIED
FILE_STRIPE_LEVEL_MIN
FILE_STRIPE_LEVEL_BALANCED
FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#file_stripe_level ParallelstoreInstance#file_stripe_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#id ParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
  the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
  to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "*" + value' would prove problematic if we were to
allow '"*"' in a future release. "

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#labels ParallelstoreInstance#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#network ParallelstoreInstance#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#project ParallelstoreInstance#project}.

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.reservedIpRange"></a>

- *Type:* java.lang.String

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#reserved_ip_range ParallelstoreInstance#reserved_ip_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#timeouts ParallelstoreInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDirectoryStripeLevel">resetDirectoryStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetFileStripeLevel">resetFileStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.putTimeouts"></a>

```java
public void putTimeouts(ParallelstoreInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a>

---

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirectoryStripeLevel` <a name="resetDirectoryStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetDirectoryStripeLevel"></a>

```java
public void resetDirectoryStripeLevel()
```

##### `resetFileStripeLevel` <a name="resetFileStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetFileStripeLevel"></a>

```java
public void resetFileStripeLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetReservedIpRange"></a>

```java
public void resetReservedIpRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ParallelstoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstance;

ParallelstoreInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstance;

ParallelstoreInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstance;

ParallelstoreInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstance;

ParallelstoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ParallelstoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ParallelstoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ParallelstoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ParallelstoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ParallelstoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.accessPoints">accessPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.daosVersion">daosVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.effectiveReservedIpRange">effectiveReservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference">ParallelstoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.capacityGibInput">capacityGibInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.directoryStripeLevelInput">directoryStripeLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fileStripeLevelInput">fileStripeLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.accessPoints"></a>

```java
public java.util.List<java.lang.String> getAccessPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `daosVersion`<sup>Required</sup> <a name="daosVersion" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.daosVersion"></a>

```java
public java.lang.String getDaosVersion();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveReservedIpRange`<sup>Required</sup> <a name="effectiveReservedIpRange" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.effectiveReservedIpRange"></a>

```java
public java.lang.String getEffectiveReservedIpRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.timeouts"></a>

```java
public ParallelstoreInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference">ParallelstoreInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.capacityGibInput"></a>

```java
public java.lang.String getCapacityGibInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directoryStripeLevelInput`<sup>Optional</sup> <a name="directoryStripeLevelInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.directoryStripeLevelInput"></a>

```java
public java.lang.String getDirectoryStripeLevelInput();
```

- *Type:* java.lang.String

---

##### `fileStripeLevelInput`<sup>Optional</sup> <a name="fileStripeLevelInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fileStripeLevelInput"></a>

```java
public java.lang.String getFileStripeLevelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.reservedIpRangeInput"></a>

```java
public java.lang.String getReservedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `directoryStripeLevel`<sup>Required</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.directoryStripeLevel"></a>

```java
public java.lang.String getDirectoryStripeLevel();
```

- *Type:* java.lang.String

---

##### `fileStripeLevel`<sup>Required</sup> <a name="fileStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.fileStripeLevel"></a>

```java
public java.lang.String getFileStripeLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ParallelstoreInstanceConfig <a name="ParallelstoreInstanceConfig" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstanceConfig;

ParallelstoreInstanceConfig.builder()
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
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .directoryStripeLevel(java.lang.String)
//  .fileStripeLevel(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .reservedIpRange(java.lang.String)
//  .timeouts(ParallelstoreInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#id ParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.network">network</a></code> | <code>java.lang.String</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#project ParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#capacity_gib ParallelstoreInstance#capacity_gib}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.

  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#instance_id ParallelstoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#location ParallelstoreInstance#location}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#deployment_type ParallelstoreInstance#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#description ParallelstoreInstance#description}

---

##### `directoryStripeLevel`<sup>Optional</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.directoryStripeLevel"></a>

```java
public java.lang.String getDirectoryStripeLevel();
```

- *Type:* java.lang.String

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
Possible values:
DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
DIRECTORY_STRIPE_LEVEL_MIN
DIRECTORY_STRIPE_LEVEL_BALANCED
DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#directory_stripe_level ParallelstoreInstance#directory_stripe_level}

---

##### `fileStripeLevel`<sup>Optional</sup> <a name="fileStripeLevel" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.fileStripeLevel"></a>

```java
public java.lang.String getFileStripeLevel();
```

- *Type:* java.lang.String

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
Possible values:
FILE_STRIPE_LEVEL_UNSPECIFIED
FILE_STRIPE_LEVEL_MIN
FILE_STRIPE_LEVEL_BALANCED
FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#file_stripe_level ParallelstoreInstance#file_stripe_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#id ParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
  the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
  to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "*" + value' would prove problematic if we were to
allow '"*"' in a future release. "

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#labels ParallelstoreInstance#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#network ParallelstoreInstance#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#project ParallelstoreInstance#project}.

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#reserved_ip_range ParallelstoreInstance#reserved_ip_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceConfig.property.timeouts"></a>

```java
public ParallelstoreInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#timeouts ParallelstoreInstance#timeouts}

---

### ParallelstoreInstanceTimeouts <a name="ParallelstoreInstanceTimeouts" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstanceTimeouts;

ParallelstoreInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#create ParallelstoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#delete ParallelstoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#update ParallelstoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#create ParallelstoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#delete ParallelstoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/parallelstore_instance#update ParallelstoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParallelstoreInstanceTimeoutsOutputReference <a name="ParallelstoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parallelstore_instance.ParallelstoreInstanceTimeoutsOutputReference;

new ParallelstoreInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parallelstoreInstance.ParallelstoreInstanceTimeouts">ParallelstoreInstanceTimeouts</a>

---




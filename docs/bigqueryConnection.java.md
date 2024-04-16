# `bigqueryConnection` Submodule <a name="`bigqueryConnection` Submodule" id="@cdktf/provider-google.bigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnection <a name="BigqueryConnection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnection;

BigqueryConnection.Builder.create(Construct scope, java.lang.String id)
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
//  .aws(BigqueryConnectionAws)
//  .azure(BigqueryConnectionAzure)
//  .cloudResource(BigqueryConnectionCloudResource)
//  .cloudSpanner(BigqueryConnectionCloudSpanner)
//  .cloudSql(BigqueryConnectionCloudSql)
//  .connectionId(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .spark(BigqueryConnectionSpark)
//  .timeouts(BigqueryConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudResource"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSpanner"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSql"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource">putCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner">putCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql">putCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource">resetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner">resetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql">resetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws"></a>

```java
public void putAws(BigqueryConnectionAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure"></a>

```java
public void putAzure(BigqueryConnectionAzure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `putCloudResource` <a name="putCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource"></a>

```java
public void putCloudResource(BigqueryConnectionCloudResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `putCloudSpanner` <a name="putCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner"></a>

```java
public void putCloudSpanner(BigqueryConnectionCloudSpanner value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `putCloudSql` <a name="putCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql"></a>

```java
public void putCloudSql(BigqueryConnectionCloudSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark"></a>

```java
public void putSpark(BigqueryConnectionSpark value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts"></a>

```java
public void putTimeouts(BigqueryConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws"></a>

```java
public void resetAws()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCloudResource` <a name="resetCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource"></a>

```java
public void resetCloudResource()
```

##### `resetCloudSpanner` <a name="resetCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner"></a>

```java
public void resetCloudSpanner()
```

##### `resetCloudSql` <a name="resetCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql"></a>

```java
public void resetCloudSql()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark"></a>

```java
public void resetSpark()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnection;

BigqueryConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnection;

BigqueryConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnection;

BigqueryConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnection;

BigqueryConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential">hasCredential</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput">azureInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput">cloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput">cloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput">cloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws"></a>

```java
public BigqueryConnectionAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure"></a>

```java
public BigqueryConnectionAzureOutputReference getAzure();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a>

---

##### `cloudResource`<sup>Required</sup> <a name="cloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource"></a>

```java
public BigqueryConnectionCloudResourceOutputReference getCloudResource();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloudSpanner`<sup>Required</sup> <a name="cloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner"></a>

```java
public BigqueryConnectionCloudSpannerOutputReference getCloudSpanner();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloudSql`<sup>Required</sup> <a name="cloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql"></a>

```java
public BigqueryConnectionCloudSqlOutputReference getCloudSql();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a>

---

##### `hasCredential`<sup>Required</sup> <a name="hasCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential"></a>

```java
public IResolvable getHasCredential();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark"></a>

```java
public BigqueryConnectionSparkOutputReference getSpark();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts"></a>

```java
public BigqueryConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput"></a>

```java
public BigqueryConnectionAws getAwsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput"></a>

```java
public BigqueryConnectionAzure getAzureInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `cloudResourceInput`<sup>Optional</sup> <a name="cloudResourceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput"></a>

```java
public BigqueryConnectionCloudResource getCloudResourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `cloudSpannerInput`<sup>Optional</sup> <a name="cloudSpannerInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput"></a>

```java
public BigqueryConnectionCloudSpanner getCloudSpannerInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `cloudSqlInput`<sup>Optional</sup> <a name="cloudSqlInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput"></a>

```java
public BigqueryConnectionCloudSql getCloudSqlInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput"></a>

```java
public BigqueryConnectionSpark getSparkInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionAws <a name="BigqueryConnectionAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAws;

BigqueryConnectionAws.builder()
    .accessRole(BigqueryConnectionAwsAccessRole)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole"></a>

```java
public BigqueryConnectionAwsAccessRole getAccessRole();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}

---

### BigqueryConnectionAwsAccessRole <a name="BigqueryConnectionAwsAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAwsAccessRole;

BigqueryConnectionAwsAccessRole.builder()
    .iamRoleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---

### BigqueryConnectionAzure <a name="BigqueryConnectionAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAzure;

BigqueryConnectionAzure.builder()
    .customerTenantId(java.lang.String)
//  .federatedApplicationClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId">customerTenantId</a></code> | <code>java.lang.String</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>java.lang.String</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId"></a>

```java
public java.lang.String getCustomerTenantId();
```

- *Type:* java.lang.String

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

##### `federatedApplicationClientId`<sup>Optional</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```java
public java.lang.String getFederatedApplicationClientId();
```

- *Type:* java.lang.String

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

### BigqueryConnectionCloudResource <a name="BigqueryConnectionCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudResource;

BigqueryConnectionCloudResource.builder()
    .build();
```


### BigqueryConnectionCloudSpanner <a name="BigqueryConnectionCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSpanner;

BigqueryConnectionCloudSpanner.builder()
    .database(java.lang.String)
//  .databaseRole(java.lang.String)
//  .maxParallelism(java.lang.Number)
//  .useDataBoost(java.lang.Boolean)
//  .useDataBoost(IResolvable)
//  .useParallelism(java.lang.Boolean)
//  .useParallelism(IResolvable)
//  .useServerlessAnalytics(java.lang.Boolean)
//  .useServerlessAnalytics(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>java.lang.String</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism">maxParallelism</a></code> | <code>java.lang.Number</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost">useDataBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism">useParallelism</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#database_role BigqueryConnection#database_role}

---

##### `maxParallelism`<sup>Optional</sup> <a name="maxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```java
public java.lang.Number getMaxParallelism();
```

- *Type:* java.lang.Number

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#max_parallelism BigqueryConnection#max_parallelism}

---

##### `useDataBoost`<sup>Optional</sup> <a name="useDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```java
public java.lang.Object getUseDataBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#use_data_boost BigqueryConnection#use_data_boost}

---

##### `useParallelism`<sup>Optional</sup> <a name="useParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism"></a>

```java
public java.lang.Object getUseParallelism();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

##### `useServerlessAnalytics`<sup>Optional</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```java
public java.lang.Object getUseServerlessAnalytics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

### BigqueryConnectionCloudSql <a name="BigqueryConnectionCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSql;

BigqueryConnectionCloudSql.builder()
    .credential(BigqueryConnectionCloudSqlCredential)
    .database(java.lang.String)
    .instanceId(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database">database</a></code> | <code>java.lang.String</code> | Database name. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type">type</a></code> | <code>java.lang.String</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential"></a>

```java
public BigqueryConnectionCloudSqlCredential getCredential();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#credential BigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#type BigqueryConnection#type}

---

### BigqueryConnectionCloudSqlCredential <a name="BigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSqlCredential;

BigqueryConnectionCloudSqlCredential.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>java.lang.String</code> | Password for database. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>java.lang.String</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#password BigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#username BigqueryConnection#username}

---

### BigqueryConnectionConfig <a name="BigqueryConnectionConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionConfig;

BigqueryConnectionConfig.builder()
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
//  .aws(BigqueryConnectionAws)
//  .azure(BigqueryConnectionAzure)
//  .cloudResource(BigqueryConnectionCloudResource)
//  .cloudSpanner(BigqueryConnectionCloudSpanner)
//  .cloudSql(BigqueryConnectionCloudSql)
//  .connectionId(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .spark(BigqueryConnectionSpark)
//  .timeouts(BigqueryConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws"></a>

```java
public BigqueryConnectionAws getAws();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure"></a>

```java
public BigqueryConnectionAzure getAzure();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource"></a>

```java
public BigqueryConnectionCloudResource getCloudResource();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner"></a>

```java
public BigqueryConnectionCloudSpanner getCloudSpanner();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql"></a>

```java
public BigqueryConnectionCloudSql getCloudSql();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark"></a>

```java
public BigqueryConnectionSpark getSpark();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts"></a>

```java
public BigqueryConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

### BigqueryConnectionSpark <a name="BigqueryConnectionSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSpark;

BigqueryConnectionSpark.builder()
//  .metastoreServiceConfig(BigqueryConnectionSparkMetastoreServiceConfig)
//  .sparkHistoryServerConfig(BigqueryConnectionSparkSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreServiceConfig`<sup>Optional</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```java
public BigqueryConnectionSparkMetastoreServiceConfig getMetastoreServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#metastore_service_config BigqueryConnection#metastore_service_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```java
public BigqueryConnectionSparkSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#spark_history_server_config BigqueryConnection#spark_history_server_config}

---

### BigqueryConnectionSparkMetastoreServiceConfig <a name="BigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSparkMetastoreServiceConfig;

BigqueryConnectionSparkMetastoreServiceConfig.builder()
//  .metastoreService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#metastore_service BigqueryConnection#metastore_service}

---

### BigqueryConnectionSparkSparkHistoryServerConfig <a name="BigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSparkSparkHistoryServerConfig;

BigqueryConnectionSparkSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#dataproc_cluster BigqueryConnection#dataproc_cluster}

---

### BigqueryConnectionTimeouts <a name="BigqueryConnectionTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionTimeouts;

BigqueryConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#create BigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#update BigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#create BigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/bigquery_connection#update BigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionAwsAccessRoleOutputReference <a name="BigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAwsAccessRoleOutputReference;

new BigqueryConnectionAwsAccessRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```java
public java.lang.String getIamRoleIdInput();
```

- *Type:* java.lang.String

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionAwsAccessRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


### BigqueryConnectionAwsOutputReference <a name="BigqueryConnectionAwsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAwsOutputReference;

new BigqueryConnectionAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole">putAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRole` <a name="putAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole"></a>

```java
public void putAccessRole(BigqueryConnectionAwsAccessRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole"></a>

```java
public BigqueryConnectionAwsAccessRoleOutputReference getAccessRole();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```java
public BigqueryConnectionAwsAccessRole getAccessRoleInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionAws getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---


### BigqueryConnectionAzureOutputReference <a name="BigqueryConnectionAzureOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionAzureOutputReference;

new BigqueryConnectionAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">resetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFederatedApplicationClientId` <a name="resetFederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```java
public void resetFederatedApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customerTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federatedApplicationClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId">customerTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `customerTenantIdInput`<sup>Optional</sup> <a name="customerTenantIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```java
public java.lang.String getCustomerTenantIdInput();
```

- *Type:* java.lang.String

---

##### `federatedApplicationClientIdInput`<sup>Optional</sup> <a name="federatedApplicationClientIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```java
public java.lang.String getFederatedApplicationClientIdInput();
```

- *Type:* java.lang.String

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```java
public java.lang.String getCustomerTenantId();
```

- *Type:* java.lang.String

---

##### `federatedApplicationClientId`<sup>Required</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```java
public java.lang.String getFederatedApplicationClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionAzure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---


### BigqueryConnectionCloudResourceOutputReference <a name="BigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudResourceOutputReference;

new BigqueryConnectionCloudResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionCloudResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---


### BigqueryConnectionCloudSpannerOutputReference <a name="BigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSpannerOutputReference;

new BigqueryConnectionCloudSpannerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">resetMaxParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">resetUseDataBoost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">resetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">resetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```java
public void resetDatabaseRole()
```

##### `resetMaxParallelism` <a name="resetMaxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```java
public void resetMaxParallelism()
```

##### `resetUseDataBoost` <a name="resetUseDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```java
public void resetUseDataBoost()
```

##### `resetUseParallelism` <a name="resetUseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```java
public void resetUseParallelism()
```

##### `resetUseServerlessAnalytics` <a name="resetUseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```java
public void resetUseServerlessAnalytics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">maxParallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">useDataBoostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">useParallelismInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">useServerlessAnalyticsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">maxParallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">useDataBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism">useParallelism</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```java
public java.lang.String getDatabaseRoleInput();
```

- *Type:* java.lang.String

---

##### `maxParallelismInput`<sup>Optional</sup> <a name="maxParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```java
public java.lang.Number getMaxParallelismInput();
```

- *Type:* java.lang.Number

---

##### `useDataBoostInput`<sup>Optional</sup> <a name="useDataBoostInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```java
public java.lang.Object getUseDataBoostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useParallelismInput`<sup>Optional</sup> <a name="useParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```java
public java.lang.Object getUseParallelismInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useServerlessAnalyticsInput`<sup>Optional</sup> <a name="useServerlessAnalyticsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```java
public java.lang.Object getUseServerlessAnalyticsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

---

##### `maxParallelism`<sup>Required</sup> <a name="maxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```java
public java.lang.Number getMaxParallelism();
```

- *Type:* java.lang.Number

---

##### `useDataBoost`<sup>Required</sup> <a name="useDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```java
public java.lang.Object getUseDataBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useParallelism`<sup>Required</sup> <a name="useParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```java
public java.lang.Object getUseParallelism();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useServerlessAnalytics`<sup>Required</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```java
public java.lang.Object getUseServerlessAnalytics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionCloudSpanner getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---


### BigqueryConnectionCloudSqlCredentialOutputReference <a name="BigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSqlCredentialOutputReference;

new BigqueryConnectionCloudSqlCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionCloudSqlCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


### BigqueryConnectionCloudSqlOutputReference <a name="BigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionCloudSqlOutputReference;

new BigqueryConnectionCloudSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```java
public void putCredential(BigqueryConnectionCloudSqlCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```java
public BigqueryConnectionCloudSqlCredentialOutputReference getCredential();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```java
public BigqueryConnectionCloudSqlCredential getCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionCloudSql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---


### BigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="BigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference;

new BigqueryConnectionSparkMetastoreServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```java
public void resetMetastoreService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```java
public java.lang.String getMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionSparkMetastoreServiceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---


### BigqueryConnectionSparkOutputReference <a name="BigqueryConnectionSparkOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSparkOutputReference;

new BigqueryConnectionSparkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">putMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">resetMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreServiceConfig` <a name="putMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```java
public void putMetastoreServiceConfig(BigqueryConnectionSparkMetastoreServiceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(BigqueryConnectionSparkSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `resetMetastoreServiceConfig` <a name="resetMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```java
public void resetMetastoreServiceConfig()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastoreServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreServiceConfig`<sup>Required</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```java
public BigqueryConnectionSparkMetastoreServiceConfigOutputReference getMetastoreServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```java
public BigqueryConnectionSparkSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceConfigInput`<sup>Optional</sup> <a name="metastoreServiceConfigInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```java
public BigqueryConnectionSparkMetastoreServiceConfig getMetastoreServiceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public BigqueryConnectionSparkSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionSpark getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---


### BigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="BigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference;

new BigqueryConnectionSparkSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public BigqueryConnectionSparkSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### BigqueryConnectionTimeoutsOutputReference <a name="BigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_connection.BigqueryConnectionTimeoutsOutputReference;

new BigqueryConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---




# `oracleDatabaseOdbNetwork` Submodule <a name="`oracleDatabaseOdbNetwork` Submodule" id="@cdktf/provider-google.oracleDatabaseOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbNetwork <a name="OracleDatabaseOdbNetwork" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network google_oracle_database_odb_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetwork;

OracleDatabaseOdbNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .network(java.lang.String)
    .odbNetworkId(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseOdbNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.odbNetworkId"></a>

- *Type:* java.lang.String

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseOdbNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetwork;

OracleDatabaseOdbNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetwork;

OracleDatabaseOdbNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetwork;

OracleDatabaseOdbNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetwork;

OracleDatabaseOdbNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseOdbNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseOdbNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts"></a>

```java
public OracleDatabaseOdbNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput"></a>

```java
public java.lang.String getOdbNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbNetworkConfig <a name="OracleDatabaseOdbNetworkConfig" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetworkConfig;

OracleDatabaseOdbNetworkConfig.builder()
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
    .network(java.lang.String)
    .odbNetworkId(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseOdbNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts"></a>

```java
public OracleDatabaseOdbNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

### OracleDatabaseOdbNetworkTimeouts <a name="OracleDatabaseOdbNetworkTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetworkTimeouts;

OracleDatabaseOdbNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbNetworkTimeoutsOutputReference <a name="OracleDatabaseOdbNetworkTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.oracle_database_odb_network.OracleDatabaseOdbNetworkTimeoutsOutputReference;

new OracleDatabaseOdbNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---




# `bigtableSchemaBundle` Submodule <a name="`bigtableSchemaBundle` Submodule" id="@cdktf/provider-google.bigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableSchemaBundle <a name="BigtableSchemaBundle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundle;

BigtableSchemaBundle.Builder.create(Construct scope, java.lang.String id)
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
    .protoSchema(BigtableSchemaBundleProtoSchema)
    .schemaBundleId(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .instance(java.lang.String)
//  .project(java.lang.String)
//  .table(java.lang.String)
//  .timeouts(BigtableSchemaBundleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.protoSchema">protoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.schemaBundleId">schemaBundleId</a></code> | <code>java.lang.String</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.protoSchema"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `schemaBundleId`<sup>Required</sup> <a name="schemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.schemaBundleId"></a>

- *Type:* java.lang.String

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.ignoreWarnings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.table"></a>

- *Type:* java.lang.String

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema">putProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtoSchema` <a name="putProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema"></a>

```java
public void putProtoSchema(BigtableSchemaBundleProtoSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts"></a>

```java
public void putTimeouts(BigtableSchemaBundleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings"></a>

```java
public void resetIgnoreWarnings()
```

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject"></a>

```java
public void resetProject()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable"></a>

```java
public void resetTable()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundle;

BigtableSchemaBundle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundle;

BigtableSchemaBundle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundle;

BigtableSchemaBundle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundle;

BigtableSchemaBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigtableSchemaBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigtableSchemaBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput">protoSchemaInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput">schemaBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId">schemaBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema"></a>

```java
public BigtableSchemaBundleProtoSchemaOutputReference getProtoSchema();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts"></a>

```java
public BigtableSchemaBundleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput"></a>

```java
public java.lang.Object getIgnoreWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protoSchemaInput`<sup>Optional</sup> <a name="protoSchemaInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput"></a>

```java
public BigtableSchemaBundleProtoSchema getProtoSchemaInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `schemaBundleIdInput`<sup>Optional</sup> <a name="schemaBundleIdInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput"></a>

```java
public java.lang.String getSchemaBundleIdInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schemaBundleId`<sup>Required</sup> <a name="schemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId"></a>

```java
public java.lang.String getSchemaBundleId();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableSchemaBundleConfig <a name="BigtableSchemaBundleConfig" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundleConfig;

BigtableSchemaBundleConfig.builder()
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
    .protoSchema(BigtableSchemaBundleProtoSchema)
    .schemaBundleId(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .instance(java.lang.String)
//  .project(java.lang.String)
//  .table(java.lang.String)
//  .timeouts(BigtableSchemaBundleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId">schemaBundleId</a></code> | <code>java.lang.String</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table">table</a></code> | <code>java.lang.String</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema"></a>

```java
public BigtableSchemaBundleProtoSchema getProtoSchema();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `schemaBundleId`<sup>Required</sup> <a name="schemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId"></a>

```java
public java.lang.String getSchemaBundleId();
```

- *Type:* java.lang.String

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts"></a>

```java
public BigtableSchemaBundleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

### BigtableSchemaBundleProtoSchema <a name="BigtableSchemaBundleProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundleProtoSchema;

BigtableSchemaBundleProtoSchema.builder()
    .protoDescriptors(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors">protoDescriptors</a></code> | <code>java.lang.String</code> | Base64 encoded content of the file. |

---

##### `protoDescriptors`<sup>Required</sup> <a name="protoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```java
public java.lang.String getProtoDescriptors();
```

- *Type:* java.lang.String

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}

---

### BigtableSchemaBundleTimeouts <a name="BigtableSchemaBundleTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundleTimeouts;

BigtableSchemaBundleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableSchemaBundleProtoSchemaOutputReference <a name="BigtableSchemaBundleProtoSchemaOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundleProtoSchemaOutputReference;

new BigtableSchemaBundleProtoSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">protoDescriptorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">protoDescriptors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protoDescriptorsInput`<sup>Optional</sup> <a name="protoDescriptorsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```java
public java.lang.String getProtoDescriptorsInput();
```

- *Type:* java.lang.String

---

##### `protoDescriptors`<sup>Required</sup> <a name="protoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```java
public java.lang.String getProtoDescriptors();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```java
public BigtableSchemaBundleProtoSchema getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---


### BigtableSchemaBundleTimeoutsOutputReference <a name="BigtableSchemaBundleTimeoutsOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_schema_bundle.BigtableSchemaBundleTimeoutsOutputReference;

new BigtableSchemaBundleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---




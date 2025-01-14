# `documentAiWarehouseDocumentSchema` Submodule <a name="`documentAiWarehouseDocumentSchema` Submodule" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiWarehouseDocumentSchema <a name="DocumentAiWarehouseDocumentSchema" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchema;

DocumentAiWarehouseDocumentSchema.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .projectNumber(java.lang.String)
    .propertyDefinitions(IResolvable)
    .propertyDefinitions(java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitions>)
//  .documentIsFolder(java.lang.Boolean)
//  .documentIsFolder(IResolvable)
//  .id(java.lang.String)
//  .timeouts(DocumentAiWarehouseDocumentSchemaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.propertyDefinitions">propertyDefinitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>></code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.documentIsFolder">documentIsFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.projectNumber"></a>

- *Type:* java.lang.String

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.propertyDefinitions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>>

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `documentIsFolder`<sup>Optional</sup> <a name="documentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.documentIsFolder"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions">putPropertyDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder">resetDocumentIsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPropertyDefinitions` <a name="putPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions"></a>

```java
public void putPropertyDefinitions(IResolvable OR java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts"></a>

```java
public void putTimeouts(DocumentAiWarehouseDocumentSchemaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `resetDocumentIsFolder` <a name="resetDocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder"></a>

```java
public void resetDocumentIsFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchema;

DocumentAiWarehouseDocumentSchema.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchema;

DocumentAiWarehouseDocumentSchema.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchema;

DocumentAiWarehouseDocumentSchema.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchema;

DocumentAiWarehouseDocumentSchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DocumentAiWarehouseDocumentSchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DocumentAiWarehouseDocumentSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DocumentAiWarehouseDocumentSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DocumentAiWarehouseDocumentSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions">propertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput">documentIsFolderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput">projectNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput">propertyDefinitionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder">documentIsFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList getPropertyDefinitions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts"></a>

```java
public DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentIsFolderInput`<sup>Optional</sup> <a name="documentIsFolderInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput"></a>

```java
public java.lang.Object getDocumentIsFolderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput"></a>

```java
public java.lang.String getProjectNumberInput();
```

- *Type:* java.lang.String

---

##### `propertyDefinitionsInput`<sup>Optional</sup> <a name="propertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput"></a>

```java
public java.lang.Object getPropertyDefinitionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentIsFolder`<sup>Required</sup> <a name="documentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder"></a>

```java
public java.lang.Object getDocumentIsFolder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiWarehouseDocumentSchemaConfig <a name="DocumentAiWarehouseDocumentSchemaConfig" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaConfig;

DocumentAiWarehouseDocumentSchemaConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .projectNumber(java.lang.String)
    .propertyDefinitions(IResolvable)
    .propertyDefinitions(java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitions>)
//  .documentIsFolder(java.lang.Boolean)
//  .documentIsFolder(IResolvable)
//  .id(java.lang.String)
//  .timeouts(DocumentAiWarehouseDocumentSchemaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions">propertyDefinitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>></code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder">documentIsFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions"></a>

```java
public java.lang.Object getPropertyDefinitions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>>

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `documentIsFolder`<sup>Optional</sup> <a name="documentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder"></a>

```java
public java.lang.Object getDocumentIsFolder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts"></a>

```java
public DocumentAiWarehouseDocumentSchemaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitions.builder()
    .name(java.lang.String)
//  .dateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions)
//  .displayName(java.lang.String)
//  .enumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions)
//  .floatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions)
//  .integerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions)
//  .isFilterable(java.lang.Boolean)
//  .isFilterable(IResolvable)
//  .isMetadata(java.lang.Boolean)
//  .isMetadata(IResolvable)
//  .isRepeatable(java.lang.Boolean)
//  .isRepeatable(IResolvable)
//  .isRequired(java.lang.Boolean)
//  .isRequired(IResolvable)
//  .isSearchable(java.lang.Boolean)
//  .isSearchable(IResolvable)
//  .mapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions)
//  .propertyTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions)
//  .retrievalImportance(java.lang.String)
//  .schemaSources(IResolvable)
//  .schemaSources(java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources>)
//  .textTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions)
//  .timestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable">isFilterable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata">isMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable">isRepeatable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable">isSearchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions">propertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | property_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance">retrievalImportance</a></code> | <code>java.lang.String</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources">schemaSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>></code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `dateTimeTypeOptions`<sup>Optional</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions getDateTimeTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `enumTypeOptions`<sup>Optional</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions getEnumTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `floatTypeOptions`<sup>Optional</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions getFloatTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `integerTypeOptions`<sup>Optional</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions getIntegerTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `isFilterable`<sup>Optional</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable"></a>

```java
public java.lang.Object getIsFilterable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `isMetadata`<sup>Optional</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata"></a>

```java
public java.lang.Object getIsMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `isRepeatable`<sup>Optional</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable"></a>

```java
public java.lang.Object getIsRepeatable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `isSearchable`<sup>Optional</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable"></a>

```java
public java.lang.Object getIsSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `mapTypeOptions`<sup>Optional</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions getMapTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `propertyTypeOptions`<sup>Optional</sup> <a name="propertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions getPropertyTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

property_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#property_type_options DocumentAiWarehouseDocumentSchema#property_type_options}

---

##### `retrievalImportance`<sup>Optional</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance"></a>

```java
public java.lang.String getRetrievalImportance();
```

- *Type:* java.lang.String

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `schemaSources`<sup>Optional</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources"></a>

```java
public java.lang.Object getSchemaSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>>

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `textTypeOptions`<sup>Optional</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions getTextTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `timestampTypeOptions`<sup>Optional</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions getTimestampTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.builder()
    .possibleValues(java.util.List<java.lang.String>)
//  .validationCheckDisabled(java.lang.Boolean)
//  .validationCheckDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `validationCheckDisabled`<sup>Optional</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```java
public java.lang.Object getValidationCheckDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.builder()
    .propertyDefinitions(IResolvable)
    .propertyDefinitions(java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions">propertyDefinitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>></code> | property_definitions block. |

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions"></a>

```java
public java.lang.Object getPropertyDefinitions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>>

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.builder()
    .name(java.lang.String)
//  .dateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions)
//  .displayName(java.lang.String)
//  .enumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions)
//  .floatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions)
//  .integerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions)
//  .isFilterable(java.lang.Boolean)
//  .isFilterable(IResolvable)
//  .isMetadata(java.lang.Boolean)
//  .isMetadata(IResolvable)
//  .isRepeatable(java.lang.Boolean)
//  .isRepeatable(IResolvable)
//  .isRequired(java.lang.Boolean)
//  .isRequired(IResolvable)
//  .isSearchable(java.lang.Boolean)
//  .isSearchable(IResolvable)
//  .mapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions)
//  .retrievalImportance(java.lang.String)
//  .schemaSources(IResolvable)
//  .schemaSources(java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources>)
//  .textTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions)
//  .timestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable">isFilterable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata">isMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable">isRepeatable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable">isSearchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance">retrievalImportance</a></code> | <code>java.lang.String</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources">schemaSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>></code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `dateTimeTypeOptions`<sup>Optional</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions getDateTimeTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `enumTypeOptions`<sup>Optional</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions getEnumTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `floatTypeOptions`<sup>Optional</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions getFloatTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `integerTypeOptions`<sup>Optional</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions getIntegerTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `isFilterable`<sup>Optional</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable"></a>

```java
public java.lang.Object getIsFilterable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `isMetadata`<sup>Optional</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata"></a>

```java
public java.lang.Object getIsMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `isRepeatable`<sup>Optional</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable"></a>

```java
public java.lang.Object getIsRepeatable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `isSearchable`<sup>Optional</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable"></a>

```java
public java.lang.Object getIsSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `mapTypeOptions`<sup>Optional</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions getMapTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `retrievalImportance`<sup>Optional</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance"></a>

```java
public java.lang.String getRetrievalImportance();
```

- *Type:* java.lang.String

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `schemaSources`<sup>Optional</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources"></a>

```java
public java.lang.Object getSchemaSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>>

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `textTypeOptions`<sup>Optional</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions getTextTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `timestampTypeOptions`<sup>Optional</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions getTimestampTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.builder()
    .possibleValues(java.util.List<java.lang.String>)
//  .validationCheckDisabled(java.lang.Boolean)
//  .validationCheckDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `validationCheckDisabled`<sup>Optional</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```java
public java.lang.Object getValidationCheckDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.builder()
//  .name(java.lang.String)
//  .processorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name">name</a></code> | <code>java.lang.String</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType">processorType</a></code> | <code>java.lang.String</code> | The Doc AI processor type name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `processorType`<sup>Optional</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.builder()
//  .name(java.lang.String)
//  .processorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name">name</a></code> | <code>java.lang.String</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType">processorType</a></code> | <code>java.lang.String</code> | The Doc AI processor type name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `processorType`<sup>Optional</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;

DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.builder()
    .build();
```


### DocumentAiWarehouseDocumentSchemaTimeouts <a name="DocumentAiWarehouseDocumentSchemaTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaTimeouts;

DocumentAiWarehouseDocumentSchemaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">resetValidationCheckDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidationCheckDisabled` <a name="resetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```java
public void resetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">possibleValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">validationCheckDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `possibleValuesInput`<sup>Optional</sup> <a name="possibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```java
public java.util.List<java.lang.String> getPossibleValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationCheckDisabledInput`<sup>Optional</sup> <a name="validationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```java
public java.lang.Object getValidationCheckDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationCheckDisabled`<sup>Required</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```java
public java.lang.Object getValidationCheckDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions">putDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions">putEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions">putFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions">putIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions">putMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions">putPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources">putSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions">putTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions">putTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">resetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions">resetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions">resetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions">resetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable">resetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata">resetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable">resetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable">resetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions">resetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions">resetPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance">resetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources">resetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions">resetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions">resetTimestampTypeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeTypeOptions` <a name="putDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```java
public void putDateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `putEnumTypeOptions` <a name="putEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```java
public void putEnumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `putFloatTypeOptions` <a name="putFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```java
public void putFloatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `putIntegerTypeOptions` <a name="putIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```java
public void putIntegerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `putMapTypeOptions` <a name="putMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```java
public void putMapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `putPropertyTypeOptions` <a name="putPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions"></a>

```java
public void putPropertyTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `putSchemaSources` <a name="putSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources"></a>

```java
public void putSchemaSources(IResolvable OR java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>>

---

##### `putTextTypeOptions` <a name="putTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```java
public void putTextTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `putTimestampTypeOptions` <a name="putTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```java
public void putTimestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `resetDateTimeTypeOptions` <a name="resetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```java
public void resetDateTimeTypeOptions()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnumTypeOptions` <a name="resetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```java
public void resetEnumTypeOptions()
```

##### `resetFloatTypeOptions` <a name="resetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```java
public void resetFloatTypeOptions()
```

##### `resetIntegerTypeOptions` <a name="resetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```java
public void resetIntegerTypeOptions()
```

##### `resetIsFilterable` <a name="resetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```java
public void resetIsFilterable()
```

##### `resetIsMetadata` <a name="resetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```java
public void resetIsMetadata()
```

##### `resetIsRepeatable` <a name="resetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```java
public void resetIsRepeatable()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetIsSearchable` <a name="resetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```java
public void resetIsSearchable()
```

##### `resetMapTypeOptions` <a name="resetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```java
public void resetMapTypeOptions()
```

##### `resetPropertyTypeOptions` <a name="resetPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions"></a>

```java
public void resetPropertyTypeOptions()
```

##### `resetRetrievalImportance` <a name="resetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```java
public void resetRetrievalImportance()
```

##### `resetSchemaSources` <a name="resetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```java
public void resetSchemaSources()
```

##### `resetTextTypeOptions` <a name="resetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```java
public void resetTextTypeOptions()
```

##### `resetTimestampTypeOptions` <a name="resetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```java
public void resetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions">propertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources">schemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">dateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">enumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">floatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">integerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput">isFilterableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput">isMetadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput">isRepeatableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput">isSearchableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">mapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput">propertyTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput">retrievalImportanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput">schemaSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput">textTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">timestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable">isFilterable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata">isMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable">isRepeatable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable">isSearchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance">retrievalImportance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateTimeTypeOptions`<sup>Required</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference getDateTimeTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `enumTypeOptions`<sup>Required</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference getEnumTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `floatTypeOptions`<sup>Required</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference getFloatTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `integerTypeOptions`<sup>Required</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference getIntegerTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `mapTypeOptions`<sup>Required</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference getMapTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `propertyTypeOptions`<sup>Required</sup> <a name="propertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference getPropertyTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a>

---

##### `schemaSources`<sup>Required</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList getSchemaSources();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a>

---

##### `textTypeOptions`<sup>Required</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference getTextTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `timestampTypeOptions`<sup>Required</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference getTimestampTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `dateTimeTypeOptionsInput`<sup>Optional</sup> <a name="dateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions getDateTimeTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enumTypeOptionsInput`<sup>Optional</sup> <a name="enumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions getEnumTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `floatTypeOptionsInput`<sup>Optional</sup> <a name="floatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions getFloatTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `integerTypeOptionsInput`<sup>Optional</sup> <a name="integerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions getIntegerTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `isFilterableInput`<sup>Optional</sup> <a name="isFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```java
public java.lang.Object getIsFilterableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadataInput`<sup>Optional</sup> <a name="isMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```java
public java.lang.Object getIsMetadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRepeatableInput`<sup>Optional</sup> <a name="isRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```java
public java.lang.Object getIsRepeatableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Object getIsRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSearchableInput`<sup>Optional</sup> <a name="isSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```java
public java.lang.Object getIsSearchableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapTypeOptionsInput`<sup>Optional</sup> <a name="mapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions getMapTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertyTypeOptionsInput`<sup>Optional</sup> <a name="propertyTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions getPropertyTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `retrievalImportanceInput`<sup>Optional</sup> <a name="retrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```java
public java.lang.String getRetrievalImportanceInput();
```

- *Type:* java.lang.String

---

##### `schemaSourcesInput`<sup>Optional</sup> <a name="schemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```java
public java.lang.Object getSchemaSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>>

---

##### `textTypeOptionsInput`<sup>Optional</sup> <a name="textTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions getTextTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `timestampTypeOptionsInput`<sup>Optional</sup> <a name="timestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions getTimestampTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isFilterable`<sup>Required</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable"></a>

```java
public java.lang.Object getIsFilterable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadata`<sup>Required</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata"></a>

```java
public java.lang.Object getIsMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRepeatable`<sup>Required</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```java
public java.lang.Object getIsRepeatable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSearchable`<sup>Required</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable"></a>

```java
public java.lang.Object getIsSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retrievalImportance`<sup>Required</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```java
public java.lang.String getRetrievalImportance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions">putPropertyDefinitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropertyDefinitions` <a name="putPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions"></a>

```java
public void putPropertyDefinitions(IResolvable OR java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions">propertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput">propertyDefinitionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList getPropertyDefinitions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a>

---

##### `propertyDefinitionsInput`<sup>Optional</sup> <a name="propertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput"></a>

```java
public java.lang.Object getPropertyDefinitionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">resetValidationCheckDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidationCheckDisabled` <a name="resetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```java
public void resetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">possibleValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">validationCheckDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `possibleValuesInput`<sup>Optional</sup> <a name="possibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```java
public java.util.List<java.lang.String> getPossibleValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationCheckDisabledInput`<sup>Optional</sup> <a name="validationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```java
public java.lang.Object getValidationCheckDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationCheckDisabled`<sup>Required</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```java
public java.lang.Object getValidationCheckDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions">putDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions">putEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions">putFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions">putIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions">putMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources">putSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions">putTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions">putTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">resetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions">resetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions">resetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions">resetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable">resetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata">resetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable">resetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable">resetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions">resetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance">resetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources">resetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions">resetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions">resetTimestampTypeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeTypeOptions` <a name="putDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```java
public void putDateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `putEnumTypeOptions` <a name="putEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```java
public void putEnumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `putFloatTypeOptions` <a name="putFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```java
public void putFloatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `putIntegerTypeOptions` <a name="putIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```java
public void putIntegerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `putMapTypeOptions` <a name="putMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```java
public void putMapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `putSchemaSources` <a name="putSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources"></a>

```java
public void putSchemaSources(IResolvable OR java.util.List<DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>>

---

##### `putTextTypeOptions` <a name="putTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```java
public void putTextTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `putTimestampTypeOptions` <a name="putTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```java
public void putTimestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `resetDateTimeTypeOptions` <a name="resetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```java
public void resetDateTimeTypeOptions()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnumTypeOptions` <a name="resetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```java
public void resetEnumTypeOptions()
```

##### `resetFloatTypeOptions` <a name="resetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```java
public void resetFloatTypeOptions()
```

##### `resetIntegerTypeOptions` <a name="resetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```java
public void resetIntegerTypeOptions()
```

##### `resetIsFilterable` <a name="resetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```java
public void resetIsFilterable()
```

##### `resetIsMetadata` <a name="resetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```java
public void resetIsMetadata()
```

##### `resetIsRepeatable` <a name="resetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```java
public void resetIsRepeatable()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetIsSearchable` <a name="resetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```java
public void resetIsSearchable()
```

##### `resetMapTypeOptions` <a name="resetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```java
public void resetMapTypeOptions()
```

##### `resetRetrievalImportance` <a name="resetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```java
public void resetRetrievalImportance()
```

##### `resetSchemaSources` <a name="resetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```java
public void resetSchemaSources()
```

##### `resetTextTypeOptions` <a name="resetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```java
public void resetTextTypeOptions()
```

##### `resetTimestampTypeOptions` <a name="resetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```java
public void resetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources">schemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">dateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">enumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">floatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">integerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput">isFilterableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput">isMetadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput">isRepeatableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput">isSearchableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">mapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput">retrievalImportanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput">schemaSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput">textTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">timestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable">isFilterable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata">isMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable">isRepeatable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable">isSearchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance">retrievalImportance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateTimeTypeOptions`<sup>Required</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference getDateTimeTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `enumTypeOptions`<sup>Required</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference getEnumTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `floatTypeOptions`<sup>Required</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference getFloatTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `integerTypeOptions`<sup>Required</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference getIntegerTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `mapTypeOptions`<sup>Required</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference getMapTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `schemaSources`<sup>Required</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList getSchemaSources();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a>

---

##### `textTypeOptions`<sup>Required</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference getTextTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `timestampTypeOptions`<sup>Required</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference getTimestampTypeOptions();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `dateTimeTypeOptionsInput`<sup>Optional</sup> <a name="dateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions getDateTimeTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enumTypeOptionsInput`<sup>Optional</sup> <a name="enumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions getEnumTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `floatTypeOptionsInput`<sup>Optional</sup> <a name="floatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions getFloatTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `integerTypeOptionsInput`<sup>Optional</sup> <a name="integerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions getIntegerTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `isFilterableInput`<sup>Optional</sup> <a name="isFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```java
public java.lang.Object getIsFilterableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadataInput`<sup>Optional</sup> <a name="isMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```java
public java.lang.Object getIsMetadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRepeatableInput`<sup>Optional</sup> <a name="isRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```java
public java.lang.Object getIsRepeatableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Object getIsRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSearchableInput`<sup>Optional</sup> <a name="isSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```java
public java.lang.Object getIsSearchableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapTypeOptionsInput`<sup>Optional</sup> <a name="mapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions getMapTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retrievalImportanceInput`<sup>Optional</sup> <a name="retrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```java
public java.lang.String getRetrievalImportanceInput();
```

- *Type:* java.lang.String

---

##### `schemaSourcesInput`<sup>Optional</sup> <a name="schemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```java
public java.lang.Object getSchemaSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>>

---

##### `textTypeOptionsInput`<sup>Optional</sup> <a name="textTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions getTextTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `timestampTypeOptionsInput`<sup>Optional</sup> <a name="timestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions getTimestampTypeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isFilterable`<sup>Required</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable"></a>

```java
public java.lang.Object getIsFilterable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadata`<sup>Required</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata"></a>

```java
public java.lang.Object getIsMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRepeatable`<sup>Required</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```java
public java.lang.Object getIsRepeatable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSearchable`<sup>Required</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable"></a>

```java
public java.lang.Object getIsSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retrievalImportance`<sup>Required</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```java
public java.lang.String getRetrievalImportance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">resetProcessorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProcessorType` <a name="resetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```java
public void resetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">processorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```java
public java.lang.String getProcessorTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">resetProcessorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProcessorType` <a name="resetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```java
public void resetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">processorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```java
public java.lang.String getProcessorTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```java
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference <a name="DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.document_ai_warehouse_document_schema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference;

new DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---




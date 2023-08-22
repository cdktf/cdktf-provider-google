# `google_document_ai_warehouse_document_schema`

Refer to the Terraform Registory for docs: [`google_document_ai_warehouse_document_schema`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema).

# `documentAiWarehouseDocumentSchema` Submodule <a name="`documentAiWarehouseDocumentSchema` Submodule" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiWarehouseDocumentSchema <a name="DocumentAiWarehouseDocumentSchema" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchema(Construct Scope, string Id, DocumentAiWarehouseDocumentSchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder">ResetDocumentIsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions"></a>

```csharp
private void PutPropertyDefinitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts"></a>

```csharp
private void PutTimeouts(DocumentAiWarehouseDocumentSchemaTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `ResetDocumentIsFolder` <a name="ResetDocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder"></a>

```csharp
private void ResetDocumentIsFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DocumentAiWarehouseDocumentSchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DocumentAiWarehouseDocumentSchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DocumentAiWarehouseDocumentSchema.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput">DocumentIsFolderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput">ProjectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder">DocumentIsFolder</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList PropertyDefinitions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentIsFolderInput`<sup>Optional</sup> <a name="DocumentIsFolderInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput"></a>

```csharp
public object DocumentIsFolderInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput"></a>

```csharp
public string ProjectNumberInput { get; }
```

- *Type:* string

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput"></a>

```csharp
public object PropertyDefinitionsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentIsFolder`<sup>Required</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder"></a>

```csharp
public object DocumentIsFolder { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiWarehouseDocumentSchemaConfig <a name="DocumentAiWarehouseDocumentSchemaConfig" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string ProjectNumber,
    object PropertyDefinitions,
    object DocumentIsFolder = null,
    string Id = null,
    DocumentAiWarehouseDocumentSchemaTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>object</code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder">DocumentIsFolder</a></code> | <code>object</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; set; }
```

- *Type:* string

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions"></a>

```csharp
public object PropertyDefinitions { get; set; }
```

- *Type:* object

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `DocumentIsFolder`<sup>Optional</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder"></a>

```csharp
public object DocumentIsFolder { get; set; }
```

- *Type:* object

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitions {
    string Name,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions = null,
    string DisplayName = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions = null,
    object IsFilterable = null,
    object IsMetadata = null,
    object IsRepeatable = null,
    object IsRequired = null,
    object IsSearchable = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptions = null,
    string RetrievalImportance = null,
    object SchemaSources = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name">Name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>object</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>object</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>object</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>object</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | property_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>object</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable"></a>

```csharp
public object IsFilterable { get; set; }
```

- *Type:* object

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata"></a>

```csharp
public object IsMetadata { get; set; }
```

- *Type:* object

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; set; }
```

- *Type:* object

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired"></a>

```csharp
public object IsRequired { get; set; }
```

- *Type:* object

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable"></a>

```csharp
public object IsSearchable { get; set; }
```

- *Type:* object

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `PropertyTypeOptions`<sup>Optional</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

property_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#property_type_options DocumentAiWarehouseDocumentSchema#property_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; set; }
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources"></a>

```csharp
public object SchemaSources { get; set; }
```

- *Type:* object

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions {
    string[] PossibleValues,
    object ValidationCheckDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; set; }
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; set; }
```

- *Type:* object

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions {
    object PropertyDefinitions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>object</code> | property_definitions block. |

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions"></a>

```csharp
public object PropertyDefinitions { get; set; }
```

- *Type:* object

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
    string Name,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions = null,
    string DisplayName = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions = null,
    object IsFilterable = null,
    object IsMetadata = null,
    object IsRepeatable = null,
    object IsRequired = null,
    object IsSearchable = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptions = null,
    string RetrievalImportance = null,
    object SchemaSources = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptions = null,
    DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name">Name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>object</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>object</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>object</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>object</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>object</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable"></a>

```csharp
public object IsFilterable { get; set; }
```

- *Type:* object

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata"></a>

```csharp
public object IsMetadata { get; set; }
```

- *Type:* object

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; set; }
```

- *Type:* object

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired"></a>

```csharp
public object IsRequired { get; set; }
```

- *Type:* object

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable"></a>

```csharp
public object IsSearchable { get; set; }
```

- *Type:* object

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; set; }
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources"></a>

```csharp
public object SchemaSources { get; set; }
```

- *Type:* object

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
    string[] PossibleValues,
    object ValidationCheckDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; set; }
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; set; }
```

- *Type:* object

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
    string Name = null,
    string ProcessorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType"></a>

```csharp
public string ProcessorType { get; set; }
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources {
    string Name = null,
    string ProcessorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType"></a>

```csharp
public string ProcessorType { get; set; }
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions {

};
```


### DocumentAiWarehouseDocumentSchemaTimeouts <a name="DocumentAiWarehouseDocumentSchemaTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```csharp
private void ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```csharp
public string[] PossibleValuesInput { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```csharp
public object ValidationCheckDisabledInput { get; }
```

- *Type:* object

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get"></a>

```csharp
private DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions">PutPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions">ResetPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```csharp
private void PutDateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```csharp
private void PutEnumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```csharp
private void PutFloatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```csharp
private void PutIntegerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```csharp
private void PutMapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `PutPropertyTypeOptions` <a name="PutPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions"></a>

```csharp
private void PutPropertyTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources"></a>

```csharp
private void PutSchemaSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* object

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```csharp
private void PutTextTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```csharp
private void PutTimestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```csharp
private void ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```csharp
private void ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```csharp
private void ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```csharp
private void ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```csharp
private void ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```csharp
private void ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```csharp
private void ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired"></a>

```csharp
private void ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```csharp
private void ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```csharp
private void ResetMapTypeOptions()
```

##### `ResetPropertyTypeOptions` <a name="ResetPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions"></a>

```csharp
private void ResetPropertyTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```csharp
private void ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```csharp
private void ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```csharp
private void ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```csharp
private void ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput">PropertyTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference DateTimeTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference EnumTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference FloatTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference IntegerTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference MapTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `PropertyTypeOptions`<sup>Required</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference PropertyTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList SchemaSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference TextTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference TimestampTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```csharp
public object IsFilterableInput { get; }
```

- *Type:* object

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```csharp
public object IsMetadataInput { get; }
```

- *Type:* object

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```csharp
public object IsRepeatableInput { get; }
```

- *Type:* object

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```csharp
public object IsRequiredInput { get; }
```

- *Type:* object

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```csharp
public object IsSearchableInput { get; }
```

- *Type:* object

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyTypeOptionsInput`<sup>Optional</sup> <a name="PropertyTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```csharp
public string RetrievalImportanceInput { get; }
```

- *Type:* string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```csharp
public object SchemaSourcesInput { get; }
```

- *Type:* object

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable"></a>

```csharp
public object IsFilterable { get; }
```

- *Type:* object

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata"></a>

```csharp
public object IsMetadata { get; }
```

- *Type:* object

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; }
```

- *Type:* object

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired"></a>

```csharp
public object IsRequired { get; }
```

- *Type:* object

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable"></a>

```csharp
public object IsSearchable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions"></a>

```csharp
private void PutPropertyDefinitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList PropertyDefinitions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a>

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput"></a>

```csharp
public object PropertyDefinitionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```csharp
private void ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```csharp
public string[] PossibleValuesInput { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```csharp
public object ValidationCheckDisabledInput { get; }
```

- *Type:* object

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get"></a>

```csharp
private DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```csharp
private void PutDateTimeTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```csharp
private void PutEnumTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```csharp
private void PutFloatTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```csharp
private void PutIntegerTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```csharp
private void PutMapTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources"></a>

```csharp
private void PutSchemaSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* object

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```csharp
private void PutTextTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```csharp
private void PutTimestampTypeOptions(DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```csharp
private void ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```csharp
private void ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```csharp
private void ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```csharp
private void ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```csharp
private void ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```csharp
private void ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```csharp
private void ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired"></a>

```csharp
private void ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```csharp
private void ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```csharp
private void ResetMapTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```csharp
private void ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```csharp
private void ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```csharp
private void ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```csharp
private void ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference DateTimeTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference EnumTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference FloatTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference IntegerTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference MapTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList SchemaSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference TextTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference TimestampTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```csharp
public object IsFilterableInput { get; }
```

- *Type:* object

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```csharp
public object IsMetadataInput { get; }
```

- *Type:* object

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```csharp
public object IsRepeatableInput { get; }
```

- *Type:* object

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```csharp
public object IsRequiredInput { get; }
```

- *Type:* object

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```csharp
public object IsSearchableInput { get; }
```

- *Type:* object

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```csharp
public string RetrievalImportanceInput { get; }
```

- *Type:* string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```csharp
public object SchemaSourcesInput { get; }
```

- *Type:* object

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable"></a>

```csharp
public object IsFilterable { get; }
```

- *Type:* object

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata"></a>

```csharp
public object IsMetadata { get; }
```

- *Type:* object

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; }
```

- *Type:* object

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired"></a>

```csharp
public object IsRequired { get; }
```

- *Type:* object

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable"></a>

```csharp
public object IsSearchable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get"></a>

```csharp
private DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```csharp
private void ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```csharp
public string ProcessorTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```csharp
public string ProcessorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get"></a>

```csharp
private DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```csharp
private void ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```csharp
public string ProcessorTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```csharp
public string ProcessorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference <a name="DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




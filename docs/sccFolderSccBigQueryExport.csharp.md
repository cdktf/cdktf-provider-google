# `sccFolderSccBigQueryExport` Submodule <a name="`sccFolderSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccFolderSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccFolderSccBigQueryExport <a name="SccFolderSccBigQueryExport" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export google_scc_folder_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderSccBigQueryExport(Construct Scope, string Id, SccFolderSccBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig">SccFolderSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig">SccFolderSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(SccFolderSccBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccFolderSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderSccBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderSccBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderSccBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderSccBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccFolderSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccFolderSccBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccFolderSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccFolderSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference">SccFolderSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.mostRecentEditor"></a>

```csharp
public string MostRecentEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeouts"></a>

```csharp
public SccFolderSccBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference">SccFolderSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportIdInput"></a>

```csharp
public string BigQueryExportIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccFolderSccBigQueryExportConfig <a name="SccFolderSccBigQueryExportConfig" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderSccBigQueryExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BigQueryExportId,
    string Dataset,
    string Description,
    string Filter,
    string Folder,
    string Id = null,
    SccFolderSccBigQueryExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.description">Description</a></code> | <code>string</code> | The description of the export (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.folder">Folder</a></code> | <code>string</code> | The folder where Cloud Security Command Center Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#id SccFolderSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; set; }
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#big_query_export_id SccFolderSccBigQueryExport#big_query_export_id}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#dataset SccFolderSccBigQueryExport#dataset}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the export (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#description SccFolderSccBigQueryExport#description}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#filter SccFolderSccBigQueryExport#filter}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder where Cloud Security Command Center Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#folder SccFolderSccBigQueryExport#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#id SccFolderSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.timeouts"></a>

```csharp
public SccFolderSccBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#timeouts SccFolderSccBigQueryExport#timeouts}

---

### SccFolderSccBigQueryExportTimeouts <a name="SccFolderSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderSccBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#create SccFolderSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#delete SccFolderSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#update SccFolderSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#create SccFolderSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#delete SccFolderSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/scc_folder_scc_big_query_export#update SccFolderSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccFolderSccBigQueryExportTimeoutsOutputReference <a name="SccFolderSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




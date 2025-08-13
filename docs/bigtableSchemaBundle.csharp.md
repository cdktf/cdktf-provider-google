# `bigtableSchemaBundle` Submodule <a name="`bigtableSchemaBundle` Submodule" id="@cdktf/provider-google.bigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableSchemaBundle <a name="BigtableSchemaBundle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundle(Construct Scope, string Id, BigtableSchemaBundleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig">BigtableSchemaBundleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig">BigtableSchemaBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema">PutProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtoSchema` <a name="PutProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema"></a>

```csharp
private void PutProtoSchema(BigtableSchemaBundleProtoSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts"></a>

```csharp
private void PutTimeouts(BigtableSchemaBundleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings"></a>

```csharp
private void ResetIgnoreWarnings()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableSchemaBundle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableSchemaBundle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableSchemaBundle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableSchemaBundle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableSchemaBundle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema">ProtoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput">ProtoSchemaInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput">SchemaBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId">SchemaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table">Table</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtoSchema`<sup>Required</sup> <a name="ProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema"></a>

```csharp
public BigtableSchemaBundleProtoSchemaOutputReference ProtoSchema { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts"></a>

```csharp
public BigtableSchemaBundleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput"></a>

```csharp
public object IgnoreWarningsInput { get; }
```

- *Type:* object

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtoSchemaInput`<sup>Optional</sup> <a name="ProtoSchemaInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput"></a>

```csharp
public BigtableSchemaBundleProtoSchema ProtoSchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `SchemaBundleIdInput`<sup>Optional</sup> <a name="SchemaBundleIdInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput"></a>

```csharp
public string SchemaBundleIdInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; }
```

- *Type:* object

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SchemaBundleId`<sup>Required</sup> <a name="SchemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId"></a>

```csharp
public string SchemaBundleId { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableSchemaBundleConfig <a name="BigtableSchemaBundleConfig" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BigtableSchemaBundleProtoSchema ProtoSchema,
    string SchemaBundleId,
    string Id = null,
    object IgnoreWarnings = null,
    string Instance = null,
    string Project = null,
    string Table = null,
    BigtableSchemaBundleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema">ProtoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId">SchemaBundleId</a></code> | <code>string</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table">Table</a></code> | <code>string</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProtoSchema`<sup>Required</sup> <a name="ProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema"></a>

```csharp
public BigtableSchemaBundleProtoSchema ProtoSchema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `SchemaBundleId`<sup>Required</sup> <a name="SchemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId"></a>

```csharp
public string SchemaBundleId { get; set; }
```

- *Type:* string

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; set; }
```

- *Type:* object

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts"></a>

```csharp
public BigtableSchemaBundleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

### BigtableSchemaBundleProtoSchema <a name="BigtableSchemaBundleProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundleProtoSchema {
    string ProtoDescriptors
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors">ProtoDescriptors</a></code> | <code>string</code> | Base64 encoded content of the file. |

---

##### `ProtoDescriptors`<sup>Required</sup> <a name="ProtoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```csharp
public string ProtoDescriptors { get; set; }
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}

---

### BigtableSchemaBundleTimeouts <a name="BigtableSchemaBundleTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableSchemaBundleProtoSchemaOutputReference <a name="BigtableSchemaBundleProtoSchemaOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundleProtoSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">ProtoDescriptorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">ProtoDescriptors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtoDescriptorsInput`<sup>Optional</sup> <a name="ProtoDescriptorsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```csharp
public string ProtoDescriptorsInput { get; }
```

- *Type:* string

---

##### `ProtoDescriptors`<sup>Required</sup> <a name="ProtoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```csharp
public string ProtoDescriptors { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```csharp
public BigtableSchemaBundleProtoSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---


### BigtableSchemaBundleTimeoutsOutputReference <a name="BigtableSchemaBundleTimeoutsOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableSchemaBundleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




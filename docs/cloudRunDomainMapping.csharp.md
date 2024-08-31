# `cloudRunDomainMapping` Submodule <a name="`cloudRunDomainMapping` Submodule" id="@cdktf/provider-google.cloudRunDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunDomainMapping <a name="CloudRunDomainMapping" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping google_cloud_run_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMapping(Construct Scope, string Id, CloudRunDomainMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata"></a>

```csharp
private void PutMetadata(CloudRunDomainMappingMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec"></a>

```csharp
private void PutSpec(CloudRunDomainMappingSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudRunDomainMappingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudRunDomainMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunDomainMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunDomainMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunDomainMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunDomainMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudRunDomainMapping resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudRunDomainMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudRunDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata"></a>

```csharp
public CloudRunDomainMappingMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec"></a>

```csharp
public CloudRunDomainMappingSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status"></a>

```csharp
public CloudRunDomainMappingStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts"></a>

```csharp
public CloudRunDomainMappingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput"></a>

```csharp
public CloudRunDomainMappingMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput"></a>

```csharp
public CloudRunDomainMappingSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunDomainMappingConfig <a name="CloudRunDomainMappingConfig" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    CloudRunDomainMappingSpec Spec,
    string Id = null,
    CloudRunDomainMappingMetadata Metadata = null,
    string Project = null,
    CloudRunDomainMappingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location">Location</a></code> | <code>string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name">Name</a></code> | <code>string</code> | Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#id CloudRunDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#project CloudRunDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#location CloudRunDomainMapping#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#name CloudRunDomainMapping#name}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec"></a>

```csharp
public CloudRunDomainMappingSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#spec CloudRunDomainMapping#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#id CloudRunDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata"></a>

```csharp
public CloudRunDomainMappingMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#metadata CloudRunDomainMapping#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#project CloudRunDomainMapping#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts"></a>

```csharp
public CloudRunDomainMappingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#timeouts CloudRunDomainMapping#timeouts}

---

### CloudRunDomainMappingMetadata <a name="CloudRunDomainMappingMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingMetadata {
    string Namespace,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace">Namespace</a></code> | <code>string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#namespace CloudRunDomainMapping#namespace}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#annotations CloudRunDomainMapping#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#labels CloudRunDomainMapping#labels}

---

### CloudRunDomainMappingSpec <a name="CloudRunDomainMappingSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingSpec {
    string RouteName,
    string CertificateMode = null,
    object ForceOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName">RouteName</a></code> | <code>string</code> | The name of the Cloud Run Service that this DomainMapping applies to. The route must exist. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode">CertificateMode</a></code> | <code>string</code> | The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"]. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride">ForceOverride</a></code> | <code>object</code> | If set, the mapping will override any mapping set before this spec was set. |

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName"></a>

```csharp
public string RouteName { get; set; }
```

- *Type:* string

The name of the Cloud Run Service that this DomainMapping applies to. The route must exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#route_name CloudRunDomainMapping#route_name}

---

##### `CertificateMode`<sup>Optional</sup> <a name="CertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode"></a>

```csharp
public string CertificateMode { get; set; }
```

- *Type:* string

The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#certificate_mode CloudRunDomainMapping#certificate_mode}

---

##### `ForceOverride`<sup>Optional</sup> <a name="ForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride"></a>

```csharp
public object ForceOverride { get; set; }
```

- *Type:* object

If set, the mapping will override any mapping set before this spec was set.

It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#force_override CloudRunDomainMapping#force_override}

---

### CloudRunDomainMappingStatus <a name="CloudRunDomainMappingStatus" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatus {

};
```


### CloudRunDomainMappingStatusConditions <a name="CloudRunDomainMappingStatusConditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusConditions {

};
```


### CloudRunDomainMappingStatusResourceRecords <a name="CloudRunDomainMappingStatusResourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusResourceRecords {

};
```


### CloudRunDomainMappingTimeouts <a name="CloudRunDomainMappingTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#create CloudRunDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#create CloudRunDomainMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunDomainMappingMetadataOutputReference <a name="CloudRunDomainMappingMetadataOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue"></a>

```csharp
public CloudRunDomainMappingMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---


### CloudRunDomainMappingSpecOutputReference <a name="CloudRunDomainMappingSpecOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode">ResetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride">ResetForceOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateMode` <a name="ResetCertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode"></a>

```csharp
private void ResetCertificateMode()
```

##### `ResetForceOverride` <a name="ResetForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride"></a>

```csharp
private void ResetForceOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput">CertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput">ForceOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput">RouteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode">CertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride">ForceOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName">RouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateModeInput`<sup>Optional</sup> <a name="CertificateModeInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput"></a>

```csharp
public string CertificateModeInput { get; }
```

- *Type:* string

---

##### `ForceOverrideInput`<sup>Optional</sup> <a name="ForceOverrideInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput"></a>

```csharp
public object ForceOverrideInput { get; }
```

- *Type:* object

---

##### `RouteNameInput`<sup>Optional</sup> <a name="RouteNameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput"></a>

```csharp
public string RouteNameInput { get; }
```

- *Type:* string

---

##### `CertificateMode`<sup>Required</sup> <a name="CertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode"></a>

```csharp
public string CertificateMode { get; }
```

- *Type:* string

---

##### `ForceOverride`<sup>Required</sup> <a name="ForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride"></a>

```csharp
public object ForceOverride { get; }
```

- *Type:* object

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName"></a>

```csharp
public string RouteName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue"></a>

```csharp
public CloudRunDomainMappingSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---


### CloudRunDomainMappingStatusConditionsList <a name="CloudRunDomainMappingStatusConditionsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get"></a>

```csharp
private CloudRunDomainMappingStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunDomainMappingStatusConditionsOutputReference <a name="CloudRunDomainMappingStatusConditionsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public CloudRunDomainMappingStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a>

---


### CloudRunDomainMappingStatusList <a name="CloudRunDomainMappingStatusList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get"></a>

```csharp
private CloudRunDomainMappingStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunDomainMappingStatusOutputReference <a name="CloudRunDomainMappingStatusOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName">MappedRouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration">ObservedGeneration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions"></a>

```csharp
public CloudRunDomainMappingStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a>

---

##### `MappedRouteName`<sup>Required</sup> <a name="MappedRouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName"></a>

```csharp
public string MappedRouteName { get; }
```

- *Type:* string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration"></a>

```csharp
public double ObservedGeneration { get; }
```

- *Type:* double

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords"></a>

```csharp
public CloudRunDomainMappingStatusResourceRecordsList ResourceRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue"></a>

```csharp
public CloudRunDomainMappingStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a>

---


### CloudRunDomainMappingStatusResourceRecordsList <a name="CloudRunDomainMappingStatusResourceRecordsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusResourceRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get"></a>

```csharp
private CloudRunDomainMappingStatusResourceRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunDomainMappingStatusResourceRecordsOutputReference <a name="CloudRunDomainMappingStatusResourceRecordsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingStatusResourceRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata">Rrdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rrdata`<sup>Required</sup> <a name="Rrdata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata"></a>

```csharp
public string Rrdata { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue"></a>

```csharp
public CloudRunDomainMappingStatusResourceRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a>

---


### CloudRunDomainMappingTimeoutsOutputReference <a name="CloudRunDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunDomainMappingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




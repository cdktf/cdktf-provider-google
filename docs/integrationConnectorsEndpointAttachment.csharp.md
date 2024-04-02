# `integrationConnectorsEndpointAttachment` Submodule <a name="`integrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsEndpointAttachment <a name="IntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsEndpointAttachment(Construct Scope, string Id, IntegrationConnectorsEndpointAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig">IntegrationConnectorsEndpointAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig">IntegrationConnectorsEndpointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationConnectorsEndpointAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsEndpointAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsEndpointAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsEndpointAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsEndpointAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationConnectorsEndpointAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp">EndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EndpointIp`<sup>Required</sup> <a name="EndpointIp" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```csharp
public string EndpointIp { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```csharp
public IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```csharp
public string ServiceAttachmentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsEndpointAttachmentConfig <a name="IntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsEndpointAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ServiceAttachment,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    IntegrationConnectorsEndpointAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location">Location</a></code> | <code>string</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; set; }
```

- *Type:* string

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```csharp
public IntegrationConnectorsEndpointAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

### IntegrationConnectorsEndpointAttachmentTimeouts <a name="IntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsEndpointAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




# `google_privateca_ca_pool`

Refer to the Terraform Registory for docs: [`google_privateca_ca_pool`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool).

# `privatecaCaPool` Submodule <a name="`privatecaCaPool` Submodule" id="@cdktf/provider-google.privatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCaPool <a name="PrivatecaCaPool" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPool(Construct Scope, string Id, PrivatecaCaPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy">PutIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions">PutPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy">ResetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions">ResetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutIssuancePolicy` <a name="PutIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy"></a>

```csharp
private void PutIssuancePolicy(PrivatecaCaPoolIssuancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `PutPublishingOptions` <a name="PutPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions"></a>

```csharp
private void PutPublishingOptions(PrivatecaCaPoolPublishingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivatecaCaPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuancePolicy` <a name="ResetIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy"></a>

```csharp
private void ResetIssuancePolicy()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublishingOptions` <a name="ResetPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions"></a>

```csharp
private void ResetPublishingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCaPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatecaCaPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCaPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCaPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCaPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput">IssuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput">PublishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IssuancePolicy`<sup>Required</sup> <a name="IssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyOutputReference IssuancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `PublishingOptions`<sup>Required</sup> <a name="PublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions"></a>

```csharp
public PrivatecaCaPoolPublishingOptionsOutputReference PublishingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts"></a>

```csharp
public PrivatecaCaPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuancePolicyInput`<sup>Optional</sup> <a name="IssuancePolicyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicy IssuancePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublishingOptionsInput`<sup>Optional</sup> <a name="PublishingOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput"></a>

```csharp
public PrivatecaCaPoolPublishingOptions PublishingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCaPoolConfig <a name="PrivatecaCaPoolConfig" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Tier,
    string Id = null,
    PrivatecaCaPoolIssuancePolicy IssuancePolicy = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    PrivatecaCaPoolPublishingOptions PublishingOptions = null,
    PrivatecaCaPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location">Location</a></code> | <code>string</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name">Name</a></code> | <code>string</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier">Tier</a></code> | <code>string</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#id PrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#project PrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#name PrivatecaCaPool#name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#tier PrivatecaCaPool#tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#id PrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuancePolicy`<sup>Optional</sup> <a name="IssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy"></a>

```csharp
public PrivatecaCaPoolIssuancePolicy IssuancePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#issuance_policy PrivatecaCaPool#issuance_policy}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#labels PrivatecaCaPool#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#project PrivatecaCaPool#project}.

---

##### `PublishingOptions`<sup>Optional</sup> <a name="PublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions"></a>

```csharp
public PrivatecaCaPoolPublishingOptions PublishingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#publishing_options PrivatecaCaPool#publishing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts"></a>

```csharp
public PrivatecaCaPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#timeouts PrivatecaCaPool#timeouts}

---

### PrivatecaCaPoolIssuancePolicy <a name="PrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicy {
    PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModes = null,
    object AllowedKeyTypes = null,
    PrivatecaCaPoolIssuancePolicyBaselineValues BaselineValues = null,
    PrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraints = null,
    string MaximumLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code>object</code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `AllowedIssuanceModes`<sup>Optional</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allowed_issuance_modes PrivatecaCaPool#allowed_issuance_modes}

---

##### `AllowedKeyTypes`<sup>Optional</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```csharp
public object AllowedKeyTypes { get; set; }
```

- *Type:* object

allowed_key_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allowed_key_types PrivatecaCaPool#allowed_key_types}

---

##### `BaselineValues`<sup>Optional</sup> <a name="BaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValues BaselineValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#baseline_values PrivatecaCaPool#baseline_values}

---

##### `IdentityConstraints`<sup>Optional</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#identity_constraints PrivatecaCaPool#identity_constraints}

---

##### `MaximumLifetime`<sup>Optional</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; set; }
```

- *Type:* string

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#maximum_lifetime PrivatecaCaPool#maximum_lifetime}

---

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
    object AllowConfigBasedIssuance,
    object AllowCsrBasedIssuance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>object</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>object</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```csharp
public object AllowConfigBasedIssuance { get; set; }
```

- *Type:* object

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allow_config_based_issuance PrivatecaCaPool#allow_config_based_issuance}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```csharp
public object AllowCsrBasedIssuance { get; set; }
```

- *Type:* object

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allow_csr_based_issuance PrivatecaCaPool#allow_csr_based_issuance}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
    PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurve = null,
    PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Rsa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `EllipticCurve`<sup>Optional</sup> <a name="EllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurve { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#elliptic_curve PrivatecaCaPool#elliptic_curve}

---

##### `Rsa`<sup>Optional</sup> <a name="Rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Rsa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#rsa PrivatecaCaPool#rsa}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
    string SignatureAlgorithm
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#signature_algorithm PrivatecaCaPool#signature_algorithm}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
    string MaxModulusSize = null,
    string MinModulusSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">MaxModulusSize</a></code> | <code>string</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">MinModulusSize</a></code> | <code>string</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `MaxModulusSize`<sup>Optional</sup> <a name="MaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```csharp
public string MaxModulusSize { get; set; }
```

- *Type:* string

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#max_modulus_size PrivatecaCaPool#max_modulus_size}

---

##### `MinModulusSize`<sup>Optional</sup> <a name="MinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```csharp
public string MinModulusSize { get; set; }
```

- *Type:* string

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#min_modulus_size PrivatecaCaPool#min_modulus_size}

---

### PrivatecaCaPoolIssuancePolicyBaselineValues <a name="PrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValues {
    PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptions,
    PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsage,
    object AdditionalExtensions = null,
    string[] AiaOcspServers = null,
    PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraints = null,
    object PolicyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">AdditionalExtensions</a></code> | <code>object</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">PolicyIds</a></code> | <code>object</code> | policy_ids block. |

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#ca_options PrivatecaCaPool#ca_options}

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#key_usage PrivatecaCaPool#key_usage}

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```csharp
public object AdditionalExtensions { get; set; }
```

- *Type:* object

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#additional_extensions PrivatecaCaPool#additional_extensions}

---

##### `AiaOcspServers`<sup>Optional</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; set; }
```

- *Type:* string[]

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#aia_ocsp_servers PrivatecaCaPool#aia_ocsp_servers}

---

##### `NameConstraints`<sup>Optional</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#name_constraints PrivatecaCaPool#name_constraints}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```csharp
public object PolicyIds { get; set; }
```

- *Type:* object

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#policy_ids PrivatecaCaPool#policy_ids}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
    object Critical,
    PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectId,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">Critical</a></code> | <code>object</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">Value</a></code> | <code>string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#object_id PrivatecaCaPool#object_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#value PrivatecaCaPool#value}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
    object IsCa = null,
    double MaxIssuerPathLength = null,
    object NonCa = null,
    object ZeroMaxIssuerPathLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">IsCa</a></code> | <code>object</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">NonCa</a></code> | <code>object</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `IsCa`<sup>Optional</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```csharp
public object IsCa { get; set; }
```

- *Type:* object

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#is_ca PrivatecaCaPool#is_ca}

---

##### `MaxIssuerPathLength`<sup>Optional</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; set; }
```

- *Type:* double

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#max_issuer_path_length PrivatecaCaPool#max_issuer_path_length}

---

##### `NonCa`<sup>Optional</sup> <a name="NonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```csharp
public object NonCa { get; set; }
```

- *Type:* object

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#non_ca PrivatecaCaPool#non_ca}

---

##### `ZeroMaxIssuerPathLength`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; set; }
```

- *Type:* object

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#zero_max_issuer_path_length PrivatecaCaPool#zero_max_issuer_path_length}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
    PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsage,
    PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage,
    object UnknownExtendedKeyUsages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code>object</code> | unknown_extended_key_usages block. |

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#base_key_usage PrivatecaCaPool#base_key_usage}

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#extended_key_usage PrivatecaCaPool#extended_key_usage}

---

##### `UnknownExtendedKeyUsages`<sup>Optional</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```csharp
public object UnknownExtendedKeyUsages { get; set; }
```

- *Type:* object

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
    object CertSign = null,
    object ContentCommitment = null,
    object CrlSign = null,
    object DataEncipherment = null,
    object DecipherOnly = null,
    object DigitalSignature = null,
    object EncipherOnly = null,
    object KeyAgreement = null,
    object KeyEncipherment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">CertSign</a></code> | <code>object</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">CrlSign</a></code> | <code>object</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | The key may be used to encipher other keys. |

---

##### `CertSign`<sup>Optional</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```csharp
public object CertSign { get; set; }
```

- *Type:* object

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#cert_sign PrivatecaCaPool#cert_sign}

---

##### `ContentCommitment`<sup>Optional</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; set; }
```

- *Type:* object

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#content_commitment PrivatecaCaPool#content_commitment}

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```csharp
public object CrlSign { get; set; }
```

- *Type:* object

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#crl_sign PrivatecaCaPool#crl_sign}

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#data_encipherment PrivatecaCaPool#data_encipherment}

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; set; }
```

- *Type:* object

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#decipher_only PrivatecaCaPool#decipher_only}

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; set; }
```

- *Type:* object

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#digital_signature PrivatecaCaPool#digital_signature}

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; set; }
```

- *Type:* object

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#encipher_only PrivatecaCaPool#encipher_only}

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; set; }
```

- *Type:* object

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#key_agreement PrivatecaCaPool#key_agreement}

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#key_encipherment PrivatecaCaPool#key_encipherment}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
    object ClientAuth = null,
    object CodeSigning = null,
    object EmailProtection = null,
    object OcspSigning = null,
    object ServerAuth = null,
    object TimeStamping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">ClientAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">CodeSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">EmailProtection</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">ServerAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">TimeStamping</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```csharp
public object ClientAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#client_auth PrivatecaCaPool#client_auth}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```csharp
public object CodeSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#code_signing PrivatecaCaPool#code_signing}

---

##### `EmailProtection`<sup>Optional</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```csharp
public object EmailProtection { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#email_protection PrivatecaCaPool#email_protection}

---

##### `OcspSigning`<sup>Optional</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#ocsp_signing PrivatecaCaPool#ocsp_signing}

---

##### `ServerAuth`<sup>Optional</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```csharp
public object ServerAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#server_auth PrivatecaCaPool#server_auth}

---

##### `TimeStamping`<sup>Optional</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```csharp
public object TimeStamping { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#time_stamping PrivatecaCaPool#time_stamping}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints {
    object Critical,
    string[] ExcludedDnsNames = null,
    string[] ExcludedEmailAddresses = null,
    string[] ExcludedIpRanges = null,
    string[] ExcludedUris = null,
    string[] PermittedDnsNames = null,
    string[] PermittedEmailAddresses = null,
    string[] PermittedIpRanges = null,
    string[] PermittedUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">Critical</a></code> | <code>object</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `ExcludedDnsNames`<sup>Optional</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; set; }
```

- *Type:* string[]

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#excluded_dns_names PrivatecaCaPool#excluded_dns_names}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#excluded_email_addresses PrivatecaCaPool#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; set; }
```

- *Type:* string[]

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#excluded_ip_ranges PrivatecaCaPool#excluded_ip_ranges}

---

##### `ExcludedUris`<sup>Optional</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; set; }
```

- *Type:* string[]

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#excluded_uris PrivatecaCaPool#excluded_uris}

---

##### `PermittedDnsNames`<sup>Optional</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; set; }
```

- *Type:* string[]

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#permitted_dns_names PrivatecaCaPool#permitted_dns_names}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#permitted_email_addresses PrivatecaCaPool#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; set; }
```

- *Type:* string[]

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#permitted_ip_ranges PrivatecaCaPool#permitted_ip_ranges}

---

##### `PermittedUris`<sup>Optional</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; set; }
```

- *Type:* string[]

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#permitted_uris PrivatecaCaPool#permitted_uris}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyIdentityConstraints {
    object AllowSubjectAltNamesPassthrough,
    object AllowSubjectPassthrough,
    PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; set; }
```

- *Type:* object

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allow_subject_alt_names_passthrough PrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; set; }
```

- *Type:* object

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#allow_subject_passthrough PrivatecaCaPool#allow_subject_passthrough}

---

##### `CelExpression`<sup>Optional</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#cel_expression PrivatecaCaPool#cel_expression}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#expression PrivatecaCaPool#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#description PrivatecaCaPool#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#title PrivatecaCaPool#title}

---

### PrivatecaCaPoolPublishingOptions <a name="PrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolPublishingOptions {
    object PublishCaCert,
    object PublishCrl,
    string EncodingFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert">PublishCaCert</a></code> | <code>object</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl">PublishCrl</a></code> | <code>object</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.encodingFormat">EncodingFormat</a></code> | <code>string</code> | Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. |

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```csharp
public object PublishCaCert { get; set; }
```

- *Type:* object

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#publish_ca_cert PrivatecaCaPool#publish_ca_cert}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```csharp
public object PublishCrl { get; set; }
```

- *Type:* object

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#publish_crl PrivatecaCaPool#publish_crl}

---

##### `EncodingFormat`<sup>Optional</sup> <a name="EncodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.encodingFormat"></a>

```csharp
public string EncodingFormat { get; set; }
```

- *Type:* string

Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs.

If this is omitted, CA certificates and CRLs
will be published in PEM. Possible values: ["PEM", "DER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#encoding_format PrivatecaCaPool#encoding_format}

---

### PrivatecaCaPoolTimeouts <a name="PrivatecaCaPoolTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#create PrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#delete PrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#update PrivatecaCaPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#create PrivatecaCaPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#delete PrivatecaCaPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/privateca_ca_pool#update PrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">AllowConfigBasedIssuanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">AllowCsrBasedIssuanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="AllowConfigBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```csharp
public object AllowConfigBasedIssuanceInput { get; }
```

- *Type:* object

---

##### `AllowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="AllowCsrBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```csharp
public object AllowCsrBasedIssuanceInput { get; }
```

- *Type:* object

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```csharp
public object AllowConfigBasedIssuance { get; }
```

- *Type:* object

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```csharp
public object AllowCsrBasedIssuance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```csharp
private PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">PutEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">PutRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">ResetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">ResetRsa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEllipticCurve` <a name="PutEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```csharp
private void PutEllipticCurve(PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `PutRsa` <a name="PutRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```csharp
private void PutRsa(PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `ResetEllipticCurve` <a name="ResetEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```csharp
private void ResetEllipticCurve()
```

##### `ResetRsa` <a name="ResetRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```csharp
private void ResetRsa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">EllipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">RsaInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EllipticCurve`<sup>Required</sup> <a name="EllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference EllipticCurve { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `Rsa`<sup>Required</sup> <a name="Rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference Rsa { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `EllipticCurveInput`<sup>Optional</sup> <a name="EllipticCurveInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `RsaInput`<sup>Optional</sup> <a name="RsaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa RsaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">ResetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">ResetMinModulusSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxModulusSize` <a name="ResetMaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```csharp
private void ResetMaxModulusSize()
```

##### `ResetMinModulusSize` <a name="ResetMinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```csharp
private void ResetMinModulusSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">MaxModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">MinModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">MaxModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">MinModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxModulusSizeInput`<sup>Optional</sup> <a name="MaxModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```csharp
public string MaxModulusSizeInput { get; }
```

- *Type:* string

---

##### `MinModulusSizeInput`<sup>Optional</sup> <a name="MinModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```csharp
public string MinModulusSizeInput { get; }
```

- *Type:* string

---

##### `MaxModulusSize`<sup>Required</sup> <a name="MaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```csharp
public string MaxModulusSize { get; }
```

- *Type:* string

---

##### `MinModulusSize`<sup>Required</sup> <a name="MinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```csharp
public string MinModulusSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```csharp
private PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">PutObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectId` <a name="PutObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```csharp
private void PutObjectId(PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference ObjectId { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">ResetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">ResetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">ResetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">ResetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCa` <a name="ResetIsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```csharp
private void ResetIsCa()
```

##### `ResetMaxIssuerPathLength` <a name="ResetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```csharp
private void ResetMaxIssuerPathLength()
```

##### `ResetNonCa` <a name="ResetNonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```csharp
private void ResetNonCa()
```

##### `ResetZeroMaxIssuerPathLength` <a name="ResetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```csharp
private void ResetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">IsCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">MaxIssuerPathLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">NonCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">ZeroMaxIssuerPathLengthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">NonCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsCaInput`<sup>Optional</sup> <a name="IsCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```csharp
public object IsCaInput { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLengthInput`<sup>Optional</sup> <a name="MaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```csharp
public double MaxIssuerPathLengthInput { get; }
```

- *Type:* double

---

##### `NonCaInput`<sup>Optional</sup> <a name="NonCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```csharp
public object NonCaInput { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```csharp
public object ZeroMaxIssuerPathLengthInput { get; }
```

- *Type:* object

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```csharp
public object IsCa { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; }
```

- *Type:* double

---

##### `NonCa`<sup>Required</sup> <a name="NonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```csharp
public object NonCa { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">ResetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">ResetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertSign` <a name="ResetCertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```csharp
private void ResetCertSign()
```

##### `ResetContentCommitment` <a name="ResetContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```csharp
private void ResetContentCommitment()
```

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```csharp
private void ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```csharp
private void ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```csharp
private void ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```csharp
private void ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```csharp
private void ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```csharp
private void ResetKeyAgreement()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```csharp
private void ResetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">CertSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">ContentCommitmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertSignInput`<sup>Optional</sup> <a name="CertSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```csharp
public object CertSignInput { get; }
```

- *Type:* object

---

##### `ContentCommitmentInput`<sup>Optional</sup> <a name="ContentCommitmentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```csharp
public object ContentCommitmentInput { get; }
```

- *Type:* object

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```csharp
public object CrlSignInput { get; }
```

- *Type:* object

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```csharp
public object DataEnciphermentInput { get; }
```

- *Type:* object

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```csharp
public object DecipherOnlyInput { get; }
```

- *Type:* object

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```csharp
public object DigitalSignatureInput { get; }
```

- *Type:* object

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```csharp
public object EncipherOnlyInput { get; }
```

- *Type:* object

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```csharp
public object KeyAgreementInput { get; }
```

- *Type:* object

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```csharp
public object KeyEnciphermentInput { get; }
```

- *Type:* object

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```csharp
public object CertSign { get; }
```

- *Type:* object

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; }
```

- *Type:* object

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```csharp
public object CrlSign { get; }
```

- *Type:* object

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; }
```

- *Type:* object

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; }
```

- *Type:* object

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; }
```

- *Type:* object

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; }
```

- *Type:* object

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; }
```

- *Type:* object

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">ResetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">ResetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">ResetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">ResetTimeStamping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```csharp
private void ResetClientAuth()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```csharp
private void ResetCodeSigning()
```

##### `ResetEmailProtection` <a name="ResetEmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```csharp
private void ResetEmailProtection()
```

##### `ResetOcspSigning` <a name="ResetOcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```csharp
private void ResetOcspSigning()
```

##### `ResetServerAuth` <a name="ResetServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```csharp
private void ResetServerAuth()
```

##### `ResetTimeStamping` <a name="ResetTimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```csharp
private void ResetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">ClientAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">EmailProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">OcspSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">ServerAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">TimeStampingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```csharp
public object ClientAuthInput { get; }
```

- *Type:* object

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```csharp
public object CodeSigningInput { get; }
```

- *Type:* object

---

##### `EmailProtectionInput`<sup>Optional</sup> <a name="EmailProtectionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```csharp
public object EmailProtectionInput { get; }
```

- *Type:* object

---

##### `OcspSigningInput`<sup>Optional</sup> <a name="OcspSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```csharp
public object OcspSigningInput { get; }
```

- *Type:* object

---

##### `ServerAuthInput`<sup>Optional</sup> <a name="ServerAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```csharp
public object ServerAuthInput { get; }
```

- *Type:* object

---

##### `TimeStampingInput`<sup>Optional</sup> <a name="TimeStampingInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```csharp
public object TimeStampingInput { get; }
```

- *Type:* object

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```csharp
public object ClientAuth { get; }
```

- *Type:* object

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```csharp
public object CodeSigning { get; }
```

- *Type:* object

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```csharp
public object EmailProtection { get; }
```

- *Type:* object

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; }
```

- *Type:* object

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```csharp
public object ServerAuth { get; }
```

- *Type:* object

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```csharp
public object TimeStamping { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">PutBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">PutExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">PutUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">ResetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseKeyUsage` <a name="PutBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```csharp
private void PutBaseKeyUsage(PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `PutExtendedKeyUsage` <a name="PutExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```csharp
private void PutExtendedKeyUsage(PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `PutUnknownExtendedKeyUsages` <a name="PutUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```csharp
private void PutUnknownExtendedKeyUsages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* object

---

##### `ResetUnknownExtendedKeyUsages` <a name="ResetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```csharp
private void ResetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">BaseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">UnknownExtendedKeyUsagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference BaseKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference ExtendedKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList UnknownExtendedKeyUsages { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `BaseKeyUsageInput`<sup>Optional</sup> <a name="BaseKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `UnknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="UnknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```csharp
public object UnknownExtendedKeyUsagesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```csharp
private PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">ResetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">ResetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">ResetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">ResetPermittedUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedDnsNames` <a name="ResetExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```csharp
private void ResetExcludedDnsNames()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```csharp
private void ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```csharp
private void ResetExcludedIpRanges()
```

##### `ResetExcludedUris` <a name="ResetExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```csharp
private void ResetExcludedUris()
```

##### `ResetPermittedDnsNames` <a name="ResetPermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```csharp
private void ResetPermittedDnsNames()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```csharp
private void ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```csharp
private void ResetPermittedIpRanges()
```

##### `ResetPermittedUris` <a name="ResetPermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```csharp
private void ResetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">ExcludedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">ExcludedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">PermittedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">PermittedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ExcludedDnsNamesInput`<sup>Optional</sup> <a name="ExcludedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```csharp
public string[] ExcludedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```csharp
public string[] ExcludedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```csharp
public string[] ExcludedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedUrisInput`<sup>Optional</sup> <a name="ExcludedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```csharp
public string[] ExcludedUrisInput { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNamesInput`<sup>Optional</sup> <a name="PermittedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```csharp
public string[] PermittedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```csharp
public string[] PermittedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```csharp
public string[] PermittedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `PermittedUrisInput`<sup>Optional</sup> <a name="PermittedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```csharp
public string[] PermittedUrisInput { get; }
```

- *Type:* string[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; }
```

- *Type:* string[]

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; }
```

- *Type:* string[]

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">PutCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">PutNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">PutPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">ResetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">ResetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```csharp
private void PutAdditionalExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutCaOptions` <a name="PutCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```csharp
private void PutCaOptions(PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```csharp
private void PutKeyUsage(PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `PutNameConstraints` <a name="PutNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```csharp
private void PutNameConstraints(PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PutPolicyIds` <a name="PutPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```csharp
private void PutPolicyIds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```csharp
private void ResetAdditionalExtensions()
```

##### `ResetAiaOcspServers` <a name="ResetAiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```csharp
private void ResetAiaOcspServers()
```

##### `ResetNameConstraints` <a name="ResetNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```csharp
private void ResetNameConstraints()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```csharp
private void ResetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">AiaOcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">CaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">NameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">PolicyIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList AdditionalExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference CaOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference KeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference NameConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList PolicyIds { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```csharp
public object AdditionalExtensionsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServersInput`<sup>Optional</sup> <a name="AiaOcspServersInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```csharp
public string[] AiaOcspServersInput { get; }
```

- *Type:* string[]

---

##### `CaOptionsInput`<sup>Optional</sup> <a name="CaOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `NameConstraintsInput`<sup>Optional</sup> <a name="NameConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```csharp
public object PolicyIdsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```csharp
private PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">PutCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">ResetCelExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCelExpression` <a name="PutCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```csharp
private void PutCelExpression(PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `ResetCelExpression` <a name="ResetCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```csharp
private void ResetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">AllowSubjectAltNamesPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">AllowSubjectPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference CelExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `AllowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```csharp
public object AllowSubjectAltNamesPassthroughInput { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```csharp
public object AllowSubjectPassthroughInput { get; }
```

- *Type:* object

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyOutputReference <a name="PrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIssuancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">PutAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">PutAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">PutBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">PutIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">ResetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">ResetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">ResetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">ResetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">ResetMaximumLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIssuanceModes` <a name="PutAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```csharp
private void PutAllowedIssuanceModes(PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `PutAllowedKeyTypes` <a name="PutAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```csharp
private void PutAllowedKeyTypes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* object

---

##### `PutBaselineValues` <a name="PutBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```csharp
private void PutBaselineValues(PrivatecaCaPoolIssuancePolicyBaselineValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `PutIdentityConstraints` <a name="PutIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```csharp
private void PutIdentityConstraints(PrivatecaCaPoolIssuancePolicyIdentityConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `ResetAllowedIssuanceModes` <a name="ResetAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```csharp
private void ResetAllowedIssuanceModes()
```

##### `ResetAllowedKeyTypes` <a name="ResetAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```csharp
private void ResetAllowedKeyTypes()
```

##### `ResetBaselineValues` <a name="ResetBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```csharp
private void ResetBaselineValues()
```

##### `ResetIdentityConstraints` <a name="ResetIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```csharp
private void ResetIdentityConstraints()
```

##### `ResetMaximumLifetime` <a name="ResetMaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```csharp
private void ResetMaximumLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">AllowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">AllowedKeyTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">BaselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">IdentityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">MaximumLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIssuanceModes`<sup>Required</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference AllowedIssuanceModes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `AllowedKeyTypes`<sup>Required</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList AllowedKeyTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `BaselineValues`<sup>Required</sup> <a name="BaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference BaselineValues { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `IdentityConstraints`<sup>Required</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference IdentityConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `AllowedIssuanceModesInput`<sup>Optional</sup> <a name="AllowedIssuanceModesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `AllowedKeyTypesInput`<sup>Optional</sup> <a name="AllowedKeyTypesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```csharp
public object AllowedKeyTypesInput { get; }
```

- *Type:* object

---

##### `BaselineValuesInput`<sup>Optional</sup> <a name="BaselineValuesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyBaselineValues BaselineValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `IdentityConstraintsInput`<sup>Optional</sup> <a name="IdentityConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```csharp
public PrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `MaximumLifetimeInput`<sup>Optional</sup> <a name="MaximumLifetimeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```csharp
public string MaximumLifetimeInput { get; }
```

- *Type:* string

---

##### `MaximumLifetime`<sup>Required</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIssuancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---


### PrivatecaCaPoolPublishingOptionsOutputReference <a name="PrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat">ResetEncodingFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncodingFormat` <a name="ResetEncodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat"></a>

```csharp
private void ResetEncodingFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput">EncodingFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">PublishCaCertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">PublishCrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat">EncodingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">PublishCaCert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">PublishCrl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingFormatInput`<sup>Optional</sup> <a name="EncodingFormatInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput"></a>

```csharp
public string EncodingFormatInput { get; }
```

- *Type:* string

---

##### `PublishCaCertInput`<sup>Optional</sup> <a name="PublishCaCertInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```csharp
public object PublishCaCertInput { get; }
```

- *Type:* object

---

##### `PublishCrlInput`<sup>Optional</sup> <a name="PublishCrlInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```csharp
public object PublishCrlInput { get; }
```

- *Type:* object

---

##### `EncodingFormat`<sup>Required</sup> <a name="EncodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat"></a>

```csharp
public string EncodingFormat { get; }
```

- *Type:* string

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```csharp
public object PublishCaCert { get; }
```

- *Type:* object

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```csharp
public object PublishCrl { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolPublishingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---


### PrivatecaCaPoolTimeoutsOutputReference <a name="PrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




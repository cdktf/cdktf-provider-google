# `networkSecuritySecurityProfileGroup` Submodule <a name="`networkSecuritySecurityProfileGroup` Submodule" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfileGroup <a name="NetworkSecuritySecurityProfileGroup" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group google_network_security_security_profile_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecuritySecurityProfileGroup(Construct Scope, string Id, NetworkSecuritySecurityProfileGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig">NetworkSecuritySecurityProfileGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig">NetworkSecuritySecurityProfileGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomInterceptProfile">ResetCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomMirroringProfile">ResetCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile">ResetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecuritySecurityProfileGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

---

##### `ResetCustomInterceptProfile` <a name="ResetCustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomInterceptProfile"></a>

```csharp
private void ResetCustomInterceptProfile()
```

##### `ResetCustomMirroringProfile` <a name="ResetCustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomMirroringProfile"></a>

```csharp
private void ResetCustomMirroringProfile()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetThreatPreventionProfile` <a name="ResetThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile"></a>

```csharp
private void ResetThreatPreventionProfile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecuritySecurityProfileGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecuritySecurityProfileGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecuritySecurityProfileGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecuritySecurityProfileGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecuritySecurityProfileGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecuritySecurityProfileGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfileGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput">CustomInterceptProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput">CustomMirroringProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput">ThreatPreventionProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts"></a>

```csharp
public NetworkSecuritySecurityProfileGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CustomInterceptProfileInput`<sup>Optional</sup> <a name="CustomInterceptProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput"></a>

```csharp
public string CustomInterceptProfileInput { get; }
```

- *Type:* string

---

##### `CustomMirroringProfileInput`<sup>Optional</sup> <a name="CustomMirroringProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput"></a>

```csharp
public string CustomMirroringProfileInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ThreatPreventionProfileInput`<sup>Optional</sup> <a name="ThreatPreventionProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput"></a>

```csharp
public string ThreatPreventionProfileInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CustomInterceptProfile`<sup>Required</sup> <a name="CustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfile"></a>

```csharp
public string CustomInterceptProfile { get; }
```

- *Type:* string

---

##### `CustomMirroringProfile`<sup>Required</sup> <a name="CustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfile"></a>

```csharp
public string CustomMirroringProfile { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ThreatPreventionProfile`<sup>Required</sup> <a name="ThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile"></a>

```csharp
public string ThreatPreventionProfile { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileGroupConfig <a name="NetworkSecuritySecurityProfileGroupConfig" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecuritySecurityProfileGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string CustomInterceptProfile = null,
    string CustomMirroringProfile = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Parent = null,
    string ThreatPreventionProfile = null,
    NetworkSecuritySecurityProfileGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name">Name</a></code> | <code>string</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code>string</code> | Reference to a SecurityProfile with the CustomIntercept configuration. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code>string</code> | Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location">Location</a></code> | <code>string</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent">Parent</a></code> | <code>string</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code>string</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#name NetworkSecuritySecurityProfileGroup#name}

---

##### `CustomInterceptProfile`<sup>Optional</sup> <a name="CustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile"></a>

```csharp
public string CustomInterceptProfile { get; set; }
```

- *Type:* string

Reference to a SecurityProfile with the CustomIntercept configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#custom_intercept_profile NetworkSecuritySecurityProfileGroup#custom_intercept_profile}

---

##### `CustomMirroringProfile`<sup>Optional</sup> <a name="CustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile"></a>

```csharp
public string CustomMirroringProfile { get; set; }
```

- *Type:* string

Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#custom_mirroring_profile NetworkSecuritySecurityProfileGroup#custom_mirroring_profile}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#description NetworkSecuritySecurityProfileGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#labels NetworkSecuritySecurityProfileGroup#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#location NetworkSecuritySecurityProfileGroup#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#parent NetworkSecuritySecurityProfileGroup#parent}

---

##### `ThreatPreventionProfile`<sup>Optional</sup> <a name="ThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile"></a>

```csharp
public string ThreatPreventionProfile { get; set; }
```

- *Type:* string

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#threat_prevention_profile NetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts"></a>

```csharp
public NetworkSecuritySecurityProfileGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#timeouts NetworkSecuritySecurityProfileGroup#timeouts}

---

### NetworkSecuritySecurityProfileGroupTimeouts <a name="NetworkSecuritySecurityProfileGroupTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecuritySecurityProfileGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileGroupTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecuritySecurityProfileGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




# `networkSecurityBackendAuthenticationConfig` Submodule <a name="`networkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityBackendAuthenticationConfig <a name="NetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityBackendAuthenticationConfig(Construct Scope, string Id, NetworkSecurityBackendAuthenticationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig">NetworkSecurityBackendAuthenticationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig">NetworkSecurityBackendAuthenticationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">ResetWellKnownRoots</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityBackendAuthenticationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```

##### `ResetWellKnownRoots` <a name="ResetWellKnownRoots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```csharp
private void ResetWellKnownRoots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityBackendAuthenticationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityBackendAuthenticationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityBackendAuthenticationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityBackendAuthenticationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityBackendAuthenticationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">WellKnownRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```csharp
public NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `WellKnownRootsInput`<sup>Optional</sup> <a name="WellKnownRootsInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```csharp
public string WellKnownRootsInput { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

##### `WellKnownRoots`<sup>Required</sup> <a name="WellKnownRoots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```csharp
public string WellKnownRoots { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityBackendAuthenticationConfigConfig <a name="NetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityBackendAuthenticationConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ClientCertificate = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    NetworkSecurityBackendAuthenticationConfigTimeouts Timeouts = null,
    string TrustConfig = null,
    string WellKnownRoots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.name">Name</a></code> | <code>string</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>string</code> | Well known roots to use for server certificate validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#name NetworkSecurityBackendAuthenticationConfig#name}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#client_certificate NetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#description NetworkSecurityBackendAuthenticationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#labels NetworkSecurityBackendAuthenticationConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#location NetworkSecurityBackendAuthenticationConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```csharp
public NetworkSecurityBackendAuthenticationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#timeouts NetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#trust_config NetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `WellKnownRoots`<sup>Optional</sup> <a name="WellKnownRoots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```csharp
public string WellKnownRoots { get; set; }
```

- *Type:* string

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#well_known_roots NetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### NetworkSecurityBackendAuthenticationConfigTimeouts <a name="NetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityBackendAuthenticationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




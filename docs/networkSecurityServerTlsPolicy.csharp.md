# `networkSecurityServerTlsPolicy` Submodule <a name="`networkSecurityServerTlsPolicy` Submodule" id="@cdktf/provider-google.networkSecurityServerTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityServerTlsPolicy <a name="NetworkSecurityServerTlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy google_network_security_server_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicy(Construct Scope, string Id, NetworkSecurityServerTlsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig">NetworkSecurityServerTlsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig">NetworkSecurityServerTlsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy">PutMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate">PutServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetAllowOpen">ResetAllowOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetMtlsPolicy">ResetMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMtlsPolicy` <a name="PutMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy"></a>

```csharp
private void PutMtlsPolicy(NetworkSecurityServerTlsPolicyMtlsPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `PutServerCertificate` <a name="PutServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate"></a>

```csharp
private void PutServerCertificate(NetworkSecurityServerTlsPolicyServerCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityServerTlsPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

---

##### `ResetAllowOpen` <a name="ResetAllowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetAllowOpen"></a>

```csharp
private void ResetAllowOpen()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMtlsPolicy` <a name="ResetMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetMtlsPolicy"></a>

```csharp
private void ResetMtlsPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetServerCertificate"></a>

```csharp
private void ResetServerCertificate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityServerTlsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityServerTlsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityServerTlsPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityServerTlsPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityServerTlsPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityServerTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityServerTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicy">MtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference">NetworkSecurityServerTlsPolicyServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference">NetworkSecurityServerTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpenInput">AllowOpenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicyInput">MtlsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificateInput">ServerCertificateInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpen">AllowOpen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MtlsPolicy`<sup>Required</sup> <a name="MtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicy"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference MtlsPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a>

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificate"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateOutputReference ServerCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference">NetworkSecurityServerTlsPolicyServerCertificateOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeouts"></a>

```csharp
public NetworkSecurityServerTlsPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference">NetworkSecurityServerTlsPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowOpenInput`<sup>Optional</sup> <a name="AllowOpenInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpenInput"></a>

```csharp
public object AllowOpenInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MtlsPolicyInput`<sup>Optional</sup> <a name="MtlsPolicyInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicyInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicy MtlsPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificateInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificate ServerCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowOpen`<sup>Required</sup> <a name="AllowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpen"></a>

```csharp
public object AllowOpen { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityServerTlsPolicyConfig <a name="NetworkSecurityServerTlsPolicyConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowOpen = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    NetworkSecurityServerTlsPolicyMtlsPolicy MtlsPolicy = null,
    string Project = null,
    NetworkSecurityServerTlsPolicyServerCertificate ServerCertificate = null,
    NetworkSecurityServerTlsPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.allowOpen">AllowOpen</a></code> | <code>object</code> | This field applies only for Traffic Director policies. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#id NetworkSecurityServerTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the server tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy">MtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | mtls_policy block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#project NetworkSecurityServerTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | server_certificate block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ServerTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#name NetworkSecurityServerTlsPolicy#name}

---

##### `AllowOpen`<sup>Optional</sup> <a name="AllowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.allowOpen"></a>

```csharp
public object AllowOpen { get; set; }
```

- *Type:* object

This field applies only for Traffic Director policies.

It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#allow_open NetworkSecurityServerTlsPolicy#allow_open}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#description NetworkSecurityServerTlsPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#id NetworkSecurityServerTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the ServerTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#labels NetworkSecurityServerTlsPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the server tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#location NetworkSecurityServerTlsPolicy#location}

---

##### `MtlsPolicy`<sup>Optional</sup> <a name="MtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicy MtlsPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

mtls_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#mtls_policy NetworkSecurityServerTlsPolicy#mtls_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#project NetworkSecurityServerTlsPolicy#project}.

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.serverCertificate"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificate ServerCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#server_certificate NetworkSecurityServerTlsPolicy#server_certificate}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.timeouts"></a>

```csharp
public NetworkSecurityServerTlsPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#timeouts NetworkSecurityServerTlsPolicy#timeouts}

---

### NetworkSecurityServerTlsPolicyMtlsPolicy <a name="NetworkSecurityServerTlsPolicyMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicy {
    object ClientValidationCa = null,
    string ClientValidationMode = null,
    string ClientValidationTrustConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa">ClientValidationCa</a></code> | <code>object</code> | client_validation_ca block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode">ClientValidationMode</a></code> | <code>string</code> | When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig">ClientValidationTrustConfig</a></code> | <code>string</code> | Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. |

---

##### `ClientValidationCa`<sup>Optional</sup> <a name="ClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa"></a>

```csharp
public object ClientValidationCa { get; set; }
```

- *Type:* object

client_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#client_validation_ca NetworkSecurityServerTlsPolicy#client_validation_ca}

---

##### `ClientValidationMode`<sup>Optional</sup> <a name="ClientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode"></a>

```csharp
public string ClientValidationMode { get; set; }
```

- *Type:* string

When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.

Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#client_validation_mode NetworkSecurityServerTlsPolicy#client_validation_mode}

---

##### `ClientValidationTrustConfig`<sup>Optional</sup> <a name="ClientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig"></a>

```csharp
public string ClientValidationTrustConfig { get; set; }
```

- *Type:* string

Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#client_validation_trust_config NetworkSecurityServerTlsPolicy#client_validation_trust_config}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa {
    NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance CertificateProviderInstance = null,
    NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint GrpcEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance CertificateProviderInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#certificate_provider_instance NetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint GrpcEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#grpc_endpoint NetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance {
    string PluginInstance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; set; }
```

- *Type:* string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#plugin_instance NetworkSecurityServerTlsPolicy#plugin_instance}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint {
    string TargetUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri"></a>

```csharp
public string TargetUri { get; set; }
```

- *Type:* string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#target_uri NetworkSecurityServerTlsPolicy#target_uri}

---

### NetworkSecurityServerTlsPolicyServerCertificate <a name="NetworkSecurityServerTlsPolicyServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificate {
    NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance CertificateProviderInstance = null,
    NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint GrpcEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance CertificateProviderInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#certificate_provider_instance NetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint GrpcEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#grpc_endpoint NetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance <a name="NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance {
    string PluginInstance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; set; }
```

- *Type:* string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#plugin_instance NetworkSecurityServerTlsPolicy#plugin_instance}

---

### NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint <a name="NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint {
    string TargetUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri"></a>

```csharp
public string TargetUri { get; set; }
```

- *Type:* string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#target_uri NetworkSecurityServerTlsPolicy#target_uri}

---

### NetworkSecurityServerTlsPolicyTimeouts <a name="NetworkSecurityServerTlsPolicyTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#create NetworkSecurityServerTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#delete NetworkSecurityServerTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#update NetworkSecurityServerTlsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#create NetworkSecurityServerTlsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#delete NetworkSecurityServerTlsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/network_security_server_tls_policy#update NetworkSecurityServerTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```csharp
public string PluginInstanceInput { get; }
```

- *Type:* string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```csharp
public string TargetUriInput { get; }
```

- *Type:* string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```csharp
public string TargetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get"></a>

```csharp
private NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance"></a>

```csharp
private void PutCertificateProviderInstance(NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint"></a>

```csharp
private void PutGrpcEndpoint(NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance"></a>

```csharp
private void ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint"></a>

```csharp
private void ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference CertificateProviderInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference GrpcEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance CertificateProviderInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint GrpcEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa">PutClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa">ResetClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode">ResetClientValidationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig">ResetClientValidationTrustConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientValidationCa` <a name="PutClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa"></a>

```csharp
private void PutClientValidationCa(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa.parameter.value"></a>

- *Type:* object

---

##### `ResetClientValidationCa` <a name="ResetClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa"></a>

```csharp
private void ResetClientValidationCa()
```

##### `ResetClientValidationMode` <a name="ResetClientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode"></a>

```csharp
private void ResetClientValidationMode()
```

##### `ResetClientValidationTrustConfig` <a name="ResetClientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig"></a>

```csharp
private void ResetClientValidationTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa">ClientValidationCa</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput">ClientValidationCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput">ClientValidationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput">ClientValidationTrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode">ClientValidationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig">ClientValidationTrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientValidationCa`<sup>Required</sup> <a name="ClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList ClientValidationCa { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a>

---

##### `ClientValidationCaInput`<sup>Optional</sup> <a name="ClientValidationCaInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput"></a>

```csharp
public object ClientValidationCaInput { get; }
```

- *Type:* object

---

##### `ClientValidationModeInput`<sup>Optional</sup> <a name="ClientValidationModeInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput"></a>

```csharp
public string ClientValidationModeInput { get; }
```

- *Type:* string

---

##### `ClientValidationTrustConfigInput`<sup>Optional</sup> <a name="ClientValidationTrustConfigInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput"></a>

```csharp
public string ClientValidationTrustConfigInput { get; }
```

- *Type:* string

---

##### `ClientValidationMode`<sup>Required</sup> <a name="ClientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode"></a>

```csharp
public string ClientValidationMode { get; }
```

- *Type:* string

---

##### `ClientValidationTrustConfig`<sup>Required</sup> <a name="ClientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig"></a>

```csharp
public string ClientValidationTrustConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyMtlsPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```csharp
public string PluginInstanceInput { get; }
```

- *Type:* string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```csharp
public string TargetUriInput { get; }
```

- *Type:* string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```csharp
public string TargetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyServerCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance"></a>

```csharp
private void PutCertificateProviderInstance(NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint"></a>

```csharp
private void PutGrpcEndpoint(NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance"></a>

```csharp
private void ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint"></a>

```csharp
private void ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference CertificateProviderInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference GrpcEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance CertificateProviderInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint GrpcEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityServerTlsPolicyServerCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---


### NetworkSecurityServerTlsPolicyTimeoutsOutputReference <a name="NetworkSecurityServerTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityServerTlsPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




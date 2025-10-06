# `beyondcorpSecurityGatewayApplication` Submodule <a name="`beyondcorpSecurityGatewayApplication` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGatewayApplication <a name="BeyondcorpSecurityGatewayApplication" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplication(Construct Scope, string Id, BeyondcorpSecurityGatewayApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig">BeyondcorpSecurityGatewayApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig">BeyondcorpSecurityGatewayApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers">PutEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatchers` <a name="PutEndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```csharp
private void PutEndpointMatchers(IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(BeyondcorpSecurityGatewayApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```csharp
private void PutUpstreams(IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```csharp
private void ResetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpSecurityGatewayApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpSecurityGatewayApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpSecurityGatewayApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpSecurityGatewayApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpSecurityGatewayApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers">EndpointMatchers</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">EndpointMatchersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput">UpstreamsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationEndpointMatchersList EndpointMatchers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsList Upstreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointMatchersInput`<sup>Optional</sup> <a name="EndpointMatchersInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers[] EndpointMatchersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams[] UpstreamsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayApplicationConfig <a name="BeyondcorpSecurityGatewayApplicationConfig" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers[] EndpointMatchers,
    string SecurityGatewayId,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    BeyondcorpSecurityGatewayApplicationTimeouts Timeouts = null,
    IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams[] Upstreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | User-settable Application resource ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">EndpointMatchers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams">Upstreams</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]</code> | upstreams block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#application_id BeyondcorpSecurityGatewayApplication#application_id}

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers[] EndpointMatchers { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#endpoint_matchers BeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#security_gateway_id BeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#display_name BeyondcorpSecurityGatewayApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#timeouts BeyondcorpSecurityGatewayApplication#timeouts}

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams[] Upstreams { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#upstreams BeyondcorpSecurityGatewayApplication#upstreams}

---

### BeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationEndpointMatchers {
    string Hostname,
    double[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">Hostname</a></code> | <code>string</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">Ports</a></code> | <code>double[]</code> | Optional. Ports of the application. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#hostname BeyondcorpSecurityGatewayApplication#hostname}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#ports BeyondcorpSecurityGatewayApplication#ports}

---

### BeyondcorpSecurityGatewayApplicationTimeouts <a name="BeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}.

---

### BeyondcorpSecurityGatewayApplicationUpstreams <a name="BeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreams {
    BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicy = null,
    BeyondcorpSecurityGatewayApplicationUpstreamsNetwork Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `EgressPolicy`<sup>Optional</sup> <a name="EgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#egress_policy BeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#network BeyondcorpSecurityGatewayApplication#network}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy {
    string[] Regions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">Regions</a></code> | <code>string[]</code> | Required. List of regions where the application sends traffic to. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#regions BeyondcorpSecurityGatewayApplication#regions}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsNetwork {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">Name</a></code> | <code>string</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_security_gateway_application#name BeyondcorpSecurityGatewayApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationEndpointMatchersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```csharp
private BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>[]

---


### BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>

---


### BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsList <a name="BeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```csharp
private BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>[]

---


### BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">PutEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">ResetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicy` <a name="PutEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```csharp
private void PutEgressPolicy(BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```csharp
private void PutNetwork(BeyondcorpSecurityGatewayApplicationUpstreamsNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `ResetEgressPolicy` <a name="ResetEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```csharp
private void ResetEgressPolicy()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">EgressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressPolicy`<sup>Required</sup> <a name="EgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference EgressPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `EgressPolicyInput`<sup>Optional</sup> <a name="EgressPolicyInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```csharp
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>

---




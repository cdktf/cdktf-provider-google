# `containerAzureCluster` Submodule <a name="`containerAzureCluster` Submodule" id="@cdktf/provider-google.containerAzureCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAzureCluster <a name="ContainerAzureCluster" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster google_container_azure_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureCluster(Construct Scope, string Id, ContainerAzureClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig">ContainerAzureClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig">ContainerAzureClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication">PutAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication">ResetAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(ContainerAzureClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---

##### `PutAzureServicesAuthentication` <a name="PutAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication"></a>

```csharp
private void PutAzureServicesAuthentication(ContainerAzureClusterAzureServicesAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane"></a>

```csharp
private void PutControlPlane(ContainerAzureClusterControlPlane Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet"></a>

```csharp
private void PutFleet(ContainerAzureClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking"></a>

```csharp
private void PutNetworking(ContainerAzureClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAzureClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAzureServicesAuthentication` <a name="ResetAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication"></a>

```csharp
private void ResetAzureServicesAuthentication()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAzureCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAzureCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAzureCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAzureCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAzureCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAzureCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAzureCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication">AzureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput">AzureRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput">AzureServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput">ClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion">AzureRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client">Client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization"></a>

```csharp
public ContainerAzureClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a>

---

##### `AzureServicesAuthentication`<sup>Required</sup> <a name="AzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication"></a>

```csharp
public ContainerAzureClusterAzureServicesAuthenticationOutputReference AzureServicesAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a>

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane"></a>

```csharp
public ContainerAzureClusterControlPlaneOutputReference ControlPlane { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet"></a>

```csharp
public ContainerAzureClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking"></a>

```csharp
public ContainerAzureClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts"></a>

```csharp
public ContainerAzureClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig"></a>

```csharp
public ContainerAzureClusterWorkloadIdentityConfigList WorkloadIdentityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput"></a>

```csharp
public ContainerAzureClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---

##### `AzureRegionInput`<sup>Optional</sup> <a name="AzureRegionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput"></a>

```csharp
public string AzureRegionInput { get; }
```

- *Type:* string

---

##### `AzureServicesAuthenticationInput`<sup>Optional</sup> <a name="AzureServicesAuthenticationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput"></a>

```csharp
public ContainerAzureClusterAzureServicesAuthentication AzureServicesAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput"></a>

```csharp
public string ClientInput { get; }
```

- *Type:* string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput"></a>

```csharp
public ContainerAzureClusterControlPlane ControlPlaneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput"></a>

```csharp
public ContainerAzureClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput"></a>

```csharp
public ContainerAzureClusterNetworking NetworkingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AzureRegion`<sup>Required</sup> <a name="AzureRegion" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion"></a>

```csharp
public string AzureRegion { get; }
```

- *Type:* string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client"></a>

```csharp
public string Client { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAzureClusterAuthorization <a name="ContainerAzureClusterAuthorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorization {
    object AdminUsers,
    object AdminGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>object</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups">AdminGroups</a></code> | <code>object</code> | admin_groups block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers"></a>

```csharp
public object AdminUsers { get; set; }
```

- *Type:* object

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#admin_users ContainerAzureCluster#admin_users}

---

##### `AdminGroups`<sup>Optional</sup> <a name="AdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups"></a>

```csharp
public object AdminGroups { get; set; }
```

- *Type:* object

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#admin_groups ContainerAzureCluster#admin_groups}

---

### ContainerAzureClusterAuthorizationAdminGroups <a name="ContainerAzureClusterAuthorizationAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminGroups {
    string Group
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group">Group</a></code> | <code>string</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#group ContainerAzureCluster#group}

---

### ContainerAzureClusterAuthorizationAdminUsers <a name="ContainerAzureClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#username ContainerAzureCluster#username}

---

### ContainerAzureClusterAzureServicesAuthentication <a name="ContainerAzureClusterAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAzureServicesAuthentication {
    string ApplicationId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId">ApplicationId</a></code> | <code>string</code> | The Azure Active Directory Application ID for Authentication configuration. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId">TenantId</a></code> | <code>string</code> | The Azure Active Directory Tenant ID for Authentication configuration. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#application_id ContainerAzureCluster#application_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#tenant_id ContainerAzureCluster#tenant_id}

---

### ContainerAzureClusterConfig <a name="ContainerAzureClusterConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ContainerAzureClusterAuthorization Authorization,
    string AzureRegion,
    ContainerAzureClusterControlPlane ControlPlane,
    ContainerAzureClusterFleet Fleet,
    string Location,
    string Name,
    ContainerAzureClusterNetworking Networking,
    string ResourceGroupId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    ContainerAzureClusterAzureServicesAuthentication AzureServicesAuthentication = null,
    string Client = null,
    string Description = null,
    string Id = null,
    string Project = null,
    ContainerAzureClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion">AzureRegion</a></code> | <code>string</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication">AzureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client">Client</a></code> | <code>string</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization"></a>

```csharp
public ContainerAzureClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#authorization ContainerAzureCluster#authorization}

---

##### `AzureRegion`<sup>Required</sup> <a name="AzureRegion" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion"></a>

```csharp
public string AzureRegion { get; set; }
```

- *Type:* string

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane"></a>

```csharp
public ContainerAzureClusterControlPlane ControlPlane { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet"></a>

```csharp
public ContainerAzureClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#fleet ContainerAzureCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#location ContainerAzureCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#name ContainerAzureCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking"></a>

```csharp
public ContainerAzureClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#networking ContainerAzureCluster#networking}

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#annotations ContainerAzureCluster#annotations}

---

##### `AzureServicesAuthentication`<sup>Optional</sup> <a name="AzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication"></a>

```csharp
public ContainerAzureClusterAzureServicesAuthentication AzureServicesAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#azure_services_authentication ContainerAzureCluster#azure_services_authentication}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client"></a>

```csharp
public string Client { get; set; }
```

- *Type:* string

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#client ContainerAzureCluster#client}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#description ContainerAzureCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts"></a>

```csharp
public ContainerAzureClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}

---

### ContainerAzureClusterControlPlane <a name="ContainerAzureClusterControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlane {
    ContainerAzureClusterControlPlaneSshConfig SshConfig,
    string SubnetId,
    string Version,
    ContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryption = null,
    ContainerAzureClusterControlPlaneMainVolume MainVolume = null,
    ContainerAzureClusterControlPlaneProxyConfig ProxyConfig = null,
    object ReplicaPlacements = null,
    ContainerAzureClusterControlPlaneRootVolume RootVolume = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VmSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId">SubnetId</a></code> | <code>string</code> | The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version">Version</a></code> | <code>string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements">ReplicaPlacements</a></code> | <code>object</code> | replica_placements block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. A set of tags to apply to all underlying control plane Azure resources. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize">VmSize</a></code> | <code>string</code> | Optional. |

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig"></a>

```csharp
public ContainerAzureClusterControlPlaneSshConfig SshConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#ssh_config ContainerAzureCluster#ssh_config}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#version ContainerAzureCluster#version}

---

##### `DatabaseEncryption`<sup>Optional</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption"></a>

```csharp
public ContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#database_encryption ContainerAzureCluster#database_encryption}

---

##### `MainVolume`<sup>Optional</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume"></a>

```csharp
public ContainerAzureClusterControlPlaneMainVolume MainVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#main_volume ContainerAzureCluster#main_volume}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig"></a>

```csharp
public ContainerAzureClusterControlPlaneProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#proxy_config ContainerAzureCluster#proxy_config}

---

##### `ReplicaPlacements`<sup>Optional</sup> <a name="ReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements"></a>

```csharp
public object ReplicaPlacements { get; set; }
```

- *Type:* object

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#replica_placements ContainerAzureCluster#replica_placements}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume"></a>

```csharp
public ContainerAzureClusterControlPlaneRootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#root_volume ContainerAzureCluster#root_volume}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#tags ContainerAzureCluster#tags}

---

##### `VmSize`<sup>Optional</sup> <a name="VmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#vm_size ContainerAzureCluster#vm_size}

---

### ContainerAzureClusterControlPlaneDatabaseEncryption <a name="ContainerAzureClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneDatabaseEncryption {
    string KeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId">KeyId</a></code> | <code>string</code> | The ARM ID of the Azure Key Vault key to encrypt / decrypt data. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#key_id ContainerAzureCluster#key_id}

---

### ContainerAzureClusterControlPlaneMainVolume <a name="ContainerAzureClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneMainVolume {
    double SizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneProxyConfig <a name="ContainerAzureClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneProxyConfig {
    string ResourceGroupId,
    string SecretId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId">SecretId</a></code> | <code>string</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#secret_id ContainerAzureCluster#secret_id}

---

### ContainerAzureClusterControlPlaneReplicaPlacements <a name="ContainerAzureClusterControlPlaneReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneReplicaPlacements {
    string AzureAvailabilityZone,
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId">SubnetId</a></code> | <code>string</code> | For a given replica, the ARM ID of the subnet where the control plane VM is deployed. |

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; set; }
```

- *Type:* string

For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#azure_availability_zone ContainerAzureCluster#azure_availability_zone}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

For a given replica, the ARM ID of the subnet where the control plane VM is deployed.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

### ContainerAzureClusterControlPlaneRootVolume <a name="ContainerAzureClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneRootVolume {
    double SizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneSshConfig <a name="ContainerAzureClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneSshConfig {
    string AuthorizedKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; set; }
```

- *Type:* string

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#authorized_key ContainerAzureCluster#authorized_key}

---

### ContainerAzureClusterFleet <a name="ContainerAzureClusterFleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterFleet {
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project">Project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

### ContainerAzureClusterNetworking <a name="ContainerAzureClusterNetworking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterNetworking {
    string[] PodAddressCidrBlocks,
    string[] ServiceAddressCidrBlocks,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; set; }
```

- *Type:* string[]

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#pod_address_cidr_blocks ContainerAzureCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; set; }
```

- *Type:* string[]

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#service_address_cidr_blocks ContainerAzureCluster#service_address_cidr_blocks}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#virtual_network_id ContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ContainerAzureClusterTimeouts <a name="ContainerAzureClusterTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}.

---

### ContainerAzureClusterWorkloadIdentityConfig <a name="ContainerAzureClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterWorkloadIdentityConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAzureClusterAuthorizationAdminGroupsList <a name="ContainerAzureClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get"></a>

```csharp
private ContainerAzureClusterAuthorizationAdminGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterAuthorizationAdminGroupsOutputReference <a name="ContainerAzureClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterAuthorizationAdminUsersList <a name="ContainerAzureClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get"></a>

```csharp
private ContainerAzureClusterAuthorizationAdminUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterAuthorizationAdminUsersOutputReference <a name="ContainerAzureClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterAuthorizationOutputReference <a name="ContainerAzureClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups">PutAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups">ResetAdminGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminGroups` <a name="PutAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups"></a>

```csharp
private void PutAdminGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* object

---

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminGroups` <a name="ResetAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups"></a>

```csharp
private void ResetAdminGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups">AdminGroups</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput">AdminGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminGroups`<sup>Required</sup> <a name="AdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups"></a>

```csharp
public ContainerAzureClusterAuthorizationAdminGroupsList AdminGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a>

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public ContainerAzureClusterAuthorizationAdminUsersList AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a>

---

##### `AdminGroupsInput`<sup>Optional</sup> <a name="AdminGroupsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```csharp
public object AdminGroupsInput { get; }
```

- *Type:* object

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public object AdminUsersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---


### ContainerAzureClusterAzureServicesAuthenticationOutputReference <a name="ContainerAzureClusterAzureServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterAzureServicesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterAzureServicesAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---


### ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlaneDatabaseEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAzureClusterControlPlaneMainVolumeOutputReference <a name="ContainerAzureClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneMainVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlaneMainVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---


### ContainerAzureClusterControlPlaneOutputReference <a name="ContainerAzureClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption">PutDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume">PutMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements">PutReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption">ResetDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume">ResetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements">ResetReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize">ResetVmSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseEncryption` <a name="PutDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```csharp
private void PutDatabaseEncryption(ContainerAzureClusterControlPlaneDatabaseEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `PutMainVolume` <a name="PutMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume"></a>

```csharp
private void PutMainVolume(ContainerAzureClusterControlPlaneMainVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig"></a>

```csharp
private void PutProxyConfig(ContainerAzureClusterControlPlaneProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `PutReplicaPlacements` <a name="PutReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements"></a>

```csharp
private void PutReplicaPlacements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements.parameter.value"></a>

- *Type:* object

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume"></a>

```csharp
private void PutRootVolume(ContainerAzureClusterControlPlaneRootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig"></a>

```csharp
private void PutSshConfig(ContainerAzureClusterControlPlaneSshConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---

##### `ResetDatabaseEncryption` <a name="ResetDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption"></a>

```csharp
private void ResetDatabaseEncryption()
```

##### `ResetMainVolume` <a name="ResetMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume"></a>

```csharp
private void ResetMainVolume()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetReplicaPlacements` <a name="ResetReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements"></a>

```csharp
private void ResetReplicaPlacements()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmSize` <a name="ResetVmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize"></a>

```csharp
private void ResetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements">ReplicaPlacements</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput">DatabaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput">MainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput">ReplicaPlacementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```csharp
public ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference DatabaseEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `MainVolume`<sup>Required</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume"></a>

```csharp
public ContainerAzureClusterControlPlaneMainVolumeOutputReference MainVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig"></a>

```csharp
public ContainerAzureClusterControlPlaneProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a>

---

##### `ReplicaPlacements`<sup>Required</sup> <a name="ReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements"></a>

```csharp
public ContainerAzureClusterControlPlaneReplicaPlacementsList ReplicaPlacements { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume"></a>

```csharp
public ContainerAzureClusterControlPlaneRootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig"></a>

```csharp
public ContainerAzureClusterControlPlaneSshConfigOutputReference SshConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a>

---

##### `DatabaseEncryptionInput`<sup>Optional</sup> <a name="DatabaseEncryptionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```csharp
public ContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `MainVolumeInput`<sup>Optional</sup> <a name="MainVolumeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```csharp
public ContainerAzureClusterControlPlaneMainVolume MainVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```csharp
public ContainerAzureClusterControlPlaneProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `ReplicaPlacementsInput`<sup>Optional</sup> <a name="ReplicaPlacementsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput"></a>

```csharp
public object ReplicaPlacementsInput { get; }
```

- *Type:* object

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```csharp
public ContainerAzureClusterControlPlaneRootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```csharp
public ContainerAzureClusterControlPlaneSshConfig SshConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlane InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---


### ContainerAzureClusterControlPlaneProxyConfigOutputReference <a name="ContainerAzureClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlaneProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---


### ContainerAzureClusterControlPlaneReplicaPlacementsList <a name="ContainerAzureClusterControlPlaneReplicaPlacementsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneReplicaPlacementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get"></a>

```csharp
private ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference <a name="ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput">AzureAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureAvailabilityZoneInput`<sup>Optional</sup> <a name="AzureAvailabilityZoneInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput"></a>

```csharp
public string AzureAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterControlPlaneRootVolumeOutputReference <a name="ContainerAzureClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneRootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlaneRootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---


### ContainerAzureClusterControlPlaneSshConfigOutputReference <a name="ContainerAzureClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterControlPlaneSshConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput">AuthorizedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedKeyInput`<sup>Optional</sup> <a name="AuthorizedKeyInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput"></a>

```csharp
public string AuthorizedKeyInput { get; }
```

- *Type:* string

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterControlPlaneSshConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---


### ContainerAzureClusterFleetOutputReference <a name="ContainerAzureClusterFleetOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---


### ContainerAzureClusterNetworkingOutputReference <a name="ContainerAzureClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```csharp
public string[] PodAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```csharp
public string[] ServiceAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterNetworking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---


### ContainerAzureClusterTimeoutsOutputReference <a name="ContainerAzureClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAzureClusterWorkloadIdentityConfigList <a name="ContainerAzureClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterWorkloadIdentityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get"></a>

```csharp
private ContainerAzureClusterWorkloadIdentityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerAzureClusterWorkloadIdentityConfigOutputReference <a name="ContainerAzureClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAzureClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```csharp
public string WorkloadPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAzureClusterWorkloadIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a>

---




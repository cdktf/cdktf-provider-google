# `gkeonpremBareMetalAdminCluster` Submodule <a name="`gkeonpremBareMetalAdminCluster` Submodule" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremBareMetalAdminCluster <a name="GkeonpremBareMetalAdminCluster" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster google_gkeonprem_bare_metal_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminCluster(scope Construct, id *string, config GkeonpremBareMetalAdminClusterConfig) GkeonpremBareMetalAdminCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig">GkeonpremBareMetalAdminClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig">GkeonpremBareMetalAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations">PutClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig">PutMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig">PutNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig">PutSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetBareMetalVersion">ResetBareMetalVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetClusterOperations">ResetClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetMaintenanceConfig">ResetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeAccessConfig">ResetNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetSecurityConfig">ResetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterOperations` <a name="PutClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations"></a>

```go
func PutClusterOperations(value GkeonpremBareMetalAdminClusterClusterOperations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane"></a>

```go
func PutControlPlane(value GkeonpremBareMetalAdminClusterControlPlane)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer"></a>

```go
func PutLoadBalancer(value GkeonpremBareMetalAdminClusterLoadBalancer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `PutMaintenanceConfig` <a name="PutMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig"></a>

```go
func PutMaintenanceConfig(value GkeonpremBareMetalAdminClusterMaintenanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GkeonpremBareMetalAdminClusterNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `PutNodeAccessConfig` <a name="PutNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig"></a>

```go
func PutNodeAccessConfig(value GkeonpremBareMetalAdminClusterNodeAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig"></a>

```go
func PutNodeConfig(value GkeonpremBareMetalAdminClusterNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy"></a>

```go
func PutProxy(value GkeonpremBareMetalAdminClusterProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---

##### `PutSecurityConfig` <a name="PutSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig"></a>

```go
func PutSecurityConfig(value GkeonpremBareMetalAdminClusterSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage"></a>

```go
func PutStorage(value GkeonpremBareMetalAdminClusterStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts"></a>

```go
func PutTimeouts(value GkeonpremBareMetalAdminClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBareMetalVersion` <a name="ResetBareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetBareMetalVersion"></a>

```go
func ResetBareMetalVersion()
```

##### `ResetClusterOperations` <a name="ResetClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetClusterOperations"></a>

```go
func ResetClusterOperations()
```

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetControlPlane"></a>

```go
func ResetControlPlane()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetMaintenanceConfig` <a name="ResetMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetMaintenanceConfig"></a>

```go
func ResetMaintenanceConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetNodeAccessConfig` <a name="ResetNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeAccessConfig"></a>

```go
func ResetNodeAccessConfig()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetSecurityConfig` <a name="ResetSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetSecurityConfig"></a>

```go
func ResetSecurityConfig()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeonpremBareMetalAdminCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeonpremBareMetalAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremBareMetalAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperations">ClusterOperations</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference">GkeonpremBareMetalAdminClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList">GkeonpremBareMetalAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfig">MaintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfig">NodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference">GkeonpremBareMetalAdminClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference">GkeonpremBareMetalAdminClusterProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList">GkeonpremBareMetalAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference">GkeonpremBareMetalAdminClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference">GkeonpremBareMetalAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.validationCheck">ValidationCheck</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList">GkeonpremBareMetalAdminClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersionInput">BareMetalVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperationsInput">ClusterOperationsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfigInput">MaintenanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput">NodeAccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfigInput">SecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersion">BareMetalVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterOperations`<sup>Required</sup> <a name="ClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperations"></a>

```go
func ClusterOperations() GkeonpremBareMetalAdminClusterClusterOperationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a>

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlane"></a>

```go
func ControlPlane() GkeonpremBareMetalAdminClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference">GkeonpremBareMetalAdminClusterControlPlaneOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fleet"></a>

```go
func Fleet() GkeonpremBareMetalAdminClusterFleetList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList">GkeonpremBareMetalAdminClusterFleetList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancer"></a>

```go
func LoadBalancer() GkeonpremBareMetalAdminClusterLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a>

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `MaintenanceConfig`<sup>Required</sup> <a name="MaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfig"></a>

```go
func MaintenanceConfig() GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfig"></a>

```go
func NetworkConfig() GkeonpremBareMetalAdminClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a>

---

##### `NodeAccessConfig`<sup>Required</sup> <a name="NodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfig"></a>

```go
func NodeAccessConfig() GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfig"></a>

```go
func NodeConfig() GkeonpremBareMetalAdminClusterNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference">GkeonpremBareMetalAdminClusterNodeConfigOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxy"></a>

```go
func Proxy() GkeonpremBareMetalAdminClusterProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference">GkeonpremBareMetalAdminClusterProxyOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SecurityConfig`<sup>Required</sup> <a name="SecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfig"></a>

```go
func SecurityConfig() GkeonpremBareMetalAdminClusterSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.status"></a>

```go
func Status() GkeonpremBareMetalAdminClusterStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList">GkeonpremBareMetalAdminClusterStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storage"></a>

```go
func Storage() GkeonpremBareMetalAdminClusterStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference">GkeonpremBareMetalAdminClusterStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeouts"></a>

```go
func Timeouts() GkeonpremBareMetalAdminClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference">GkeonpremBareMetalAdminClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ValidationCheck`<sup>Required</sup> <a name="ValidationCheck" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.validationCheck"></a>

```go
func ValidationCheck() GkeonpremBareMetalAdminClusterValidationCheckList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList">GkeonpremBareMetalAdminClusterValidationCheckList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BareMetalVersionInput`<sup>Optional</sup> <a name="BareMetalVersionInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersionInput"></a>

```go
func BareMetalVersionInput() *string
```

- *Type:* *string

---

##### `ClusterOperationsInput`<sup>Optional</sup> <a name="ClusterOperationsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperationsInput"></a>

```go
func ClusterOperationsInput() GkeonpremBareMetalAdminClusterClusterOperations
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlaneInput"></a>

```go
func ControlPlaneInput() GkeonpremBareMetalAdminClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() GkeonpremBareMetalAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceConfigInput`<sup>Optional</sup> <a name="MaintenanceConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfigInput"></a>

```go
func MaintenanceConfigInput() GkeonpremBareMetalAdminClusterMaintenanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GkeonpremBareMetalAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `NodeAccessConfigInput`<sup>Optional</sup> <a name="NodeAccessConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput"></a>

```go
func NodeAccessConfigInput() GkeonpremBareMetalAdminClusterNodeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfigInput"></a>

```go
func NodeConfigInput() GkeonpremBareMetalAdminClusterNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxyInput"></a>

```go
func ProxyInput() GkeonpremBareMetalAdminClusterProxy
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---

##### `SecurityConfigInput`<sup>Optional</sup> <a name="SecurityConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfigInput"></a>

```go
func SecurityConfigInput() GkeonpremBareMetalAdminClusterSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storageInput"></a>

```go
func StorageInput() GkeonpremBareMetalAdminClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BareMetalVersion`<sup>Required</sup> <a name="BareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersion"></a>

```go
func BareMetalVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremBareMetalAdminClusterClusterOperations <a name="GkeonpremBareMetalAdminClusterClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterClusterOperations {
	EnableApplicationLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs">EnableApplicationLogs</a></code> | <code>interface{}</code> | Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). |

---

##### `EnableApplicationLogs`<sup>Optional</sup> <a name="EnableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs"></a>

```go
EnableApplicationLogs interface{}
```

- *Type:* interface{}

Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#enable_application_logs GkeonpremBareMetalAdminCluster#enable_application_logs}

---

### GkeonpremBareMetalAdminClusterConfig <a name="GkeonpremBareMetalAdminClusterConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	BareMetalVersion: *string,
	ClusterOperations: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations,
	ControlPlane: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane,
	Description: *string,
	Id: *string,
	LoadBalancer: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer,
	MaintenanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig,
	NetworkConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig,
	NodeAccessConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig,
	NodeConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig,
	Project: *string,
	Proxy: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy,
	SecurityConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig,
	Storage: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.name">Name</a></code> | <code>*string</code> | The bare metal admin cluster name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations on the Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion">BareMetalVersion</a></code> | <code>*string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.clusterOperations">ClusterOperations</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | cluster_operations block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.description">Description</a></code> | <code>*string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#id GkeonpremBareMetalAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig">MaintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig">NodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | node_access_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#project GkeonpremBareMetalAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#location GkeonpremBareMetalAdminCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The bare metal admin cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#name GkeonpremBareMetalAdminCluster#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations on the Bare Metal Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#annotations GkeonpremBareMetalAdminCluster#annotations}

---

##### `BareMetalVersion`<sup>Optional</sup> <a name="BareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion"></a>

```go
BareMetalVersion *string
```

- *Type:* *string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#bare_metal_version GkeonpremBareMetalAdminCluster#bare_metal_version}

---

##### `ClusterOperations`<sup>Optional</sup> <a name="ClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.clusterOperations"></a>

```go
ClusterOperations GkeonpremBareMetalAdminClusterClusterOperations
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

cluster_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#cluster_operations GkeonpremBareMetalAdminCluster#cluster_operations}

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.controlPlane"></a>

```go
ControlPlane GkeonpremBareMetalAdminClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane GkeonpremBareMetalAdminCluster#control_plane}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#description GkeonpremBareMetalAdminCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#id GkeonpremBareMetalAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.loadBalancer"></a>

```go
LoadBalancer GkeonpremBareMetalAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#load_balancer GkeonpremBareMetalAdminCluster#load_balancer}

---

##### `MaintenanceConfig`<sup>Optional</sup> <a name="MaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig"></a>

```go
MaintenanceConfig GkeonpremBareMetalAdminClusterMaintenanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_config GkeonpremBareMetalAdminCluster#maintenance_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.networkConfig"></a>

```go
NetworkConfig GkeonpremBareMetalAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#network_config GkeonpremBareMetalAdminCluster#network_config}

---

##### `NodeAccessConfig`<sup>Optional</sup> <a name="NodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig"></a>

```go
NodeAccessConfig GkeonpremBareMetalAdminClusterNodeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

node_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_access_config GkeonpremBareMetalAdminCluster#node_access_config}

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeConfig"></a>

```go
NodeConfig GkeonpremBareMetalAdminClusterNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_config GkeonpremBareMetalAdminCluster#node_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#project GkeonpremBareMetalAdminCluster#project}.

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.proxy"></a>

```go
Proxy GkeonpremBareMetalAdminClusterProxy
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#proxy GkeonpremBareMetalAdminCluster#proxy}

---

##### `SecurityConfig`<sup>Optional</sup> <a name="SecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.securityConfig"></a>

```go
SecurityConfig GkeonpremBareMetalAdminClusterSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#security_config GkeonpremBareMetalAdminCluster#security_config}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.storage"></a>

```go
Storage GkeonpremBareMetalAdminClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage GkeonpremBareMetalAdminCluster#storage}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.timeouts"></a>

```go
Timeouts GkeonpremBareMetalAdminClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#timeouts GkeonpremBareMetalAdminCluster#timeouts}

---

### GkeonpremBareMetalAdminClusterControlPlane <a name="GkeonpremBareMetalAdminClusterControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlane {
	ControlPlaneNodePoolConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig,
	ApiServerArgs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig">ControlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | control_plane_node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs">ApiServerArgs</a></code> | <code>interface{}</code> | api_server_args block. |

---

##### `ControlPlaneNodePoolConfig`<sup>Required</sup> <a name="ControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig"></a>

```go
ControlPlaneNodePoolConfig GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

control_plane_node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_node_pool_config GkeonpremBareMetalAdminCluster#control_plane_node_pool_config}

---

##### `ApiServerArgs`<sup>Optional</sup> <a name="ApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs"></a>

```go
ApiServerArgs interface{}
```

- *Type:* interface{}

api_server_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#api_server_args GkeonpremBareMetalAdminCluster#api_server_args}

---

### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs {
	Argument: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument">Argument</a></code> | <code>*string</code> | The argument name as it appears on the API Server command line please make sure to remove the leading dashes. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value">Value</a></code> | <code>*string</code> | The value of the arg as it will be passed to the API Server command line. |

---

##### `Argument`<sup>Required</sup> <a name="Argument" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument"></a>

```go
Argument *string
```

- *Type:* *string

The argument name as it appears on the API Server command line please make sure to remove the leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#argument GkeonpremBareMetalAdminCluster#argument}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the arg as it will be passed to the API Server command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig {
	NodePoolConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | node_pool_config block. |

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig"></a>

```go
NodePoolConfig GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_pool_config GkeonpremBareMetalAdminCluster#node_pool_config}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
	Labels: *map[string]*string,
	NodeConfigs: interface{},
	OperatingSystem: *string,
	Taints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs">NodeConfigs</a></code> | <code>interface{}</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}

---

##### `NodeConfigs`<sup>Optional</sup> <a name="NodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs"></a>

```go
NodeConfigs interface{}
```

- *Type:* interface{}

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_configs GkeonpremBareMetalAdminCluster#node_configs}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#operating_system GkeonpremBareMetalAdminCluster#operating_system}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#taints GkeonpremBareMetalAdminCluster#taints}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
	Labels: *map[string]*string,
	NodeIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp">NodeIp</a></code> | <code>*string</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}

---

##### `NodeIp`<sup>Optional</sup> <a name="NodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp"></a>

```go
NodeIp *string
```

- *Type:* *string

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_ip GkeonpremBareMetalAdminCluster#node_ip}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect">Effect</a></code> | <code>*string</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key">Key</a></code> | <code>*string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value">Value</a></code> | <code>*string</code> | Value associated with the effect. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#effect GkeonpremBareMetalAdminCluster#effect}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#key GkeonpremBareMetalAdminCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}

---

### GkeonpremBareMetalAdminClusterFleet <a name="GkeonpremBareMetalAdminClusterFleet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterFleet {

}
```


### GkeonpremBareMetalAdminClusterLoadBalancer <a name="GkeonpremBareMetalAdminClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterLoadBalancer {
	PortConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig,
	VipConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig,
	ManualLbConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig">PortConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | port_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |

---

##### `PortConfig`<sup>Required</sup> <a name="PortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig"></a>

```go
PortConfig GkeonpremBareMetalAdminClusterLoadBalancerPortConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

port_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#port_config GkeonpremBareMetalAdminCluster#port_config}

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig"></a>

```go
VipConfig GkeonpremBareMetalAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#vip_config GkeonpremBareMetalAdminCluster#vip_config}

---

##### `ManualLbConfig`<sup>Optional</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig"></a>

```go
ManualLbConfig GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#manual_lb_config GkeonpremBareMetalAdminCluster#manual_lb_config}

---

### GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether manual load balancing is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether manual load balancing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#enabled GkeonpremBareMetalAdminCluster#enabled}

---

### GkeonpremBareMetalAdminClusterLoadBalancerPortConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerPortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig {
	ControlPlaneLoadBalancerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort">ControlPlaneLoadBalancerPort</a></code> | <code>*f64</code> | The port that control plane hosted load balancers will listen on. |

---

##### `ControlPlaneLoadBalancerPort`<sup>Required</sup> <a name="ControlPlaneLoadBalancerPort" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort"></a>

```go
ControlPlaneLoadBalancerPort *f64
```

- *Type:* *f64

The port that control plane hosted load balancers will listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_load_balancer_port GkeonpremBareMetalAdminCluster#control_plane_load_balancer_port}

---

### GkeonpremBareMetalAdminClusterLoadBalancerVipConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig {
	ControlPlaneVip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster. |

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```go
ControlPlaneVip *string
```

- *Type:* *string

The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_vip GkeonpremBareMetalAdminCluster#control_plane_vip}

---

### GkeonpremBareMetalAdminClusterMaintenanceConfig <a name="GkeonpremBareMetalAdminClusterMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterMaintenanceConfig {
	MaintenanceAddressCidrBlocks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks">MaintenanceAddressCidrBlocks</a></code> | <code>*[]*string</code> | All IPv4 address from these ranges will be placed into maintenance mode. |

---

##### `MaintenanceAddressCidrBlocks`<sup>Required</sup> <a name="MaintenanceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks"></a>

```go
MaintenanceAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All IPv4 address from these ranges will be placed into maintenance mode.

Nodes in maintenance mode will be cordoned and drained. When both of these
are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
on the node resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_address_cidr_blocks GkeonpremBareMetalAdminCluster#maintenance_address_cidr_blocks}

---

### GkeonpremBareMetalAdminClusterNetworkConfig <a name="GkeonpremBareMetalAdminClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterNetworkConfig {
	IslandModeCidr: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr">IslandModeCidr</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | island_mode_cidr block. |

---

##### `IslandModeCidr`<sup>Optional</sup> <a name="IslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr"></a>

```go
IslandModeCidr GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

island_mode_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#island_mode_cidr GkeonpremBareMetalAdminCluster#island_mode_cidr}

---

### GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr <a name="GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr {
	PodAddressCidrBlocks: *[]*string,
	ServiceAddressCidrBlocks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks"></a>

```go
PodAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#pod_address_cidr_blocks GkeonpremBareMetalAdminCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks"></a>

```go
ServiceAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#service_address_cidr_blocks GkeonpremBareMetalAdminCluster#service_address_cidr_blocks}

---

### GkeonpremBareMetalAdminClusterNodeAccessConfig <a name="GkeonpremBareMetalAdminClusterNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterNodeAccessConfig {
	LoginUser: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser">LoginUser</a></code> | <code>*string</code> | LoginUser is the user name used to access node machines. It defaults to "root" if not set. |

---

##### `LoginUser`<sup>Optional</sup> <a name="LoginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser"></a>

```go
LoginUser *string
```

- *Type:* *string

LoginUser is the user name used to access node machines. It defaults to "root" if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#login_user GkeonpremBareMetalAdminCluster#login_user}

---

### GkeonpremBareMetalAdminClusterNodeConfig <a name="GkeonpremBareMetalAdminClusterNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterNodeConfig {
	MaxPodsPerNode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | The maximum number of pods a node can run. |

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

The maximum number of pods a node can run.

The size of the CIDR range
assigned to the node will be derived from this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#max_pods_per_node GkeonpremBareMetalAdminCluster#max_pods_per_node}

---

### GkeonpremBareMetalAdminClusterProxy <a name="GkeonpremBareMetalAdminClusterProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterProxy {
	Uri: *string,
	NoProxy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.uri">Uri</a></code> | <code>*string</code> | Specifies the address of your proxy server. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.noProxy">NoProxy</a></code> | <code>*[]*string</code> | A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Specifies the address of your proxy server.

Examples: http://domain
WARNING: Do not provide credentials in the format
http://(username:password@)domain these will be rejected by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#uri GkeonpremBareMetalAdminCluster#uri}

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.noProxy"></a>

```go
NoProxy *[]*string
```

- *Type:* *[]*string

A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#no_proxy GkeonpremBareMetalAdminCluster#no_proxy}

---

### GkeonpremBareMetalAdminClusterSecurityConfig <a name="GkeonpremBareMetalAdminClusterSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterSecurityConfig {
	Authorization: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | authorization block. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.property.authorization"></a>

```go
Authorization GkeonpremBareMetalAdminClusterSecurityConfigAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#authorization GkeonpremBareMetalAdminCluster#authorization}

---

### GkeonpremBareMetalAdminClusterSecurityConfigAuthorization <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization {
	AdminUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers">AdminUsers</a></code> | <code>interface{}</code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers"></a>

```go
AdminUsers interface{}
```

- *Type:* interface{}

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#admin_users GkeonpremBareMetalAdminCluster#admin_users}

---

### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers {
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username">Username</a></code> | <code>*string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#username GkeonpremBareMetalAdminCluster#username}

---

### GkeonpremBareMetalAdminClusterStatus <a name="GkeonpremBareMetalAdminClusterStatus" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStatus {

}
```


### GkeonpremBareMetalAdminClusterStatusConditions <a name="GkeonpremBareMetalAdminClusterStatusConditions" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStatusConditions {

}
```


### GkeonpremBareMetalAdminClusterStorage <a name="GkeonpremBareMetalAdminClusterStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStorage {
	LvpNodeMountsConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig,
	LvpShareConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig">LvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | lvp_node_mounts_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig">LvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | lvp_share_config block. |

---

##### `LvpNodeMountsConfig`<sup>Required</sup> <a name="LvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig"></a>

```go
LvpNodeMountsConfig GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

lvp_node_mounts_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_node_mounts_config GkeonpremBareMetalAdminCluster#lvp_node_mounts_config}

---

##### `LvpShareConfig`<sup>Required</sup> <a name="LvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig"></a>

```go
LvpShareConfig GkeonpremBareMetalAdminClusterStorageLvpShareConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

lvp_share_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_share_config GkeonpremBareMetalAdminCluster#lvp_share_config}

---

### GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig {
	Path: *string,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path">Path</a></code> | <code>*string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The StorageClass name that PVs will be created with. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}

---

### GkeonpremBareMetalAdminClusterStorageLvpShareConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig {
	LvpConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig,
	SharedPathPvCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig">LvpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | lvp_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount">SharedPathPvCount</a></code> | <code>*f64</code> | The number of subdirectories to create under path. |

---

##### `LvpConfig`<sup>Required</sup> <a name="LvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig"></a>

```go
LvpConfig GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

lvp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_config GkeonpremBareMetalAdminCluster#lvp_config}

---

##### `SharedPathPvCount`<sup>Optional</sup> <a name="SharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount"></a>

```go
SharedPathPvCount *f64
```

- *Type:* *f64

The number of subdirectories to create under path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#shared_path_pv_count GkeonpremBareMetalAdminCluster#shared_path_pv_count}

---

### GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig {
	Path: *string,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path">Path</a></code> | <code>*string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The StorageClass name that PVs will be created with. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}

---

### GkeonpremBareMetalAdminClusterTimeouts <a name="GkeonpremBareMetalAdminClusterTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#create GkeonpremBareMetalAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#delete GkeonpremBareMetalAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#update GkeonpremBareMetalAdminCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#create GkeonpremBareMetalAdminCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#delete GkeonpremBareMetalAdminCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/gkeonprem_bare_metal_admin_cluster#update GkeonpremBareMetalAdminCluster#update}.

---

### GkeonpremBareMetalAdminClusterValidationCheck <a name="GkeonpremBareMetalAdminClusterValidationCheck" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterValidationCheck {

}
```


### GkeonpremBareMetalAdminClusterValidationCheckStatus <a name="GkeonpremBareMetalAdminClusterValidationCheckStatus" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterValidationCheckStatus {

}
```


### GkeonpremBareMetalAdminClusterValidationCheckStatusResult <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResult" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

&gkeonprembaremetaladmincluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GkeonpremBareMetalAdminClusterClusterOperationsOutputReference <a name="GkeonpremBareMetalAdminClusterClusterOperationsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterClusterOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterClusterOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs">ResetEnableApplicationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableApplicationLogs` <a name="ResetEnableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs"></a>

```go
func ResetEnableApplicationLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput">EnableApplicationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs">EnableApplicationLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableApplicationLogsInput`<sup>Optional</sup> <a name="EnableApplicationLogsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput"></a>

```go
func EnableApplicationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableApplicationLogs`<sup>Required</sup> <a name="EnableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs"></a>

```go
func EnableApplicationLogs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterClusterOperations
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput">ArgumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument">Argument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentInput`<sup>Optional</sup> <a name="ArgumentInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput"></a>

```go
func ArgumentInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Argument`<sup>Required</sup> <a name="Argument" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument"></a>

```go
func Argument() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp">ResetNodeIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNodeIp` <a name="ResetNodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```go
func ResetNodeIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">NodeIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp">NodeIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeIpInput`<sup>Optional</sup> <a name="NodeIpInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```go
func NodeIpInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeIp`<sup>Required</sup> <a name="NodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```go
func NodeIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs">PutNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs">ResetNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeConfigs` <a name="PutNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs"></a>

```go
func PutNodeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNodeConfigs` <a name="ResetNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs"></a>

```go
func ResetNodeConfigs()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints"></a>

```go
func ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs">NodeConfigs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput">NodeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeConfigs`<sup>Required</sup> <a name="NodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs"></a>

```go
func NodeConfigs() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints"></a>

```go
func Taints() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeConfigsInput`<sup>Optional</sup> <a name="NodeConfigsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```go
func NodeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect"></a>

```go
func ResetEffect()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig">PutNodePoolConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodePoolConfig` <a name="PutNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig"></a>

```go
func PutNodePoolConfig(value GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput">NodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig"></a>

```go
func NodePoolConfig() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a>

---

##### `NodePoolConfigInput`<sup>Optional</sup> <a name="NodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput"></a>

```go
func NodePoolConfigInput() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterControlPlaneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterControlPlaneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs">PutApiServerArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig">PutControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs">ResetApiServerArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiServerArgs` <a name="PutApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs"></a>

```go
func PutApiServerArgs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutControlPlaneNodePoolConfig` <a name="PutControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig"></a>

```go
func PutControlPlaneNodePoolConfig(value GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `ResetApiServerArgs` <a name="ResetApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs"></a>

```go
func ResetApiServerArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs">ApiServerArgs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig">ControlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput">ApiServerArgsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput">ControlPlaneNodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiServerArgs`<sup>Required</sup> <a name="ApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs"></a>

```go
func ApiServerArgs() GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a>

---

##### `ControlPlaneNodePoolConfig`<sup>Required</sup> <a name="ControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig"></a>

```go
func ControlPlaneNodePoolConfig() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a>

---

##### `ApiServerArgsInput`<sup>Optional</sup> <a name="ApiServerArgsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput"></a>

```go
func ApiServerArgsInput() interface{}
```

- *Type:* interface{}

---

##### `ControlPlaneNodePoolConfigInput`<sup>Optional</sup> <a name="ControlPlaneNodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput"></a>

```go
func ControlPlaneNodePoolConfigInput() GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---


### GkeonpremBareMetalAdminClusterFleetList <a name="GkeonpremBareMetalAdminClusterFleetList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterFleetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterFleetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterFleetOutputReference <a name="GkeonpremBareMetalAdminClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet">GkeonpremBareMetalAdminClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet">GkeonpremBareMetalAdminClusterFleet</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig">PutManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig">PutPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig">PutVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig">ResetManualLbConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManualLbConfig` <a name="PutManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```go
func PutManualLbConfig(value GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `PutPortConfig` <a name="PutPortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig"></a>

```go
func PutPortConfig(value GkeonpremBareMetalAdminClusterLoadBalancerPortConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `PutVipConfig` <a name="PutVipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```go
func PutVipConfig(value GkeonpremBareMetalAdminClusterLoadBalancerVipConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `ResetManualLbConfig` <a name="ResetManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```go
func ResetManualLbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig">PortConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">ManualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput">PortConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput">VipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualLbConfig`<sup>Required</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```go
func ManualLbConfig() GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `PortConfig`<sup>Required</sup> <a name="PortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig"></a>

```go
func PortConfig() GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a>

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```go
func VipConfig() GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `ManualLbConfigInput`<sup>Optional</sup> <a name="ManualLbConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```go
func ManualLbConfigInput() GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `PortConfigInput`<sup>Optional</sup> <a name="PortConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput"></a>

```go
func PortConfigInput() GkeonpremBareMetalAdminClusterLoadBalancerPortConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `VipConfigInput`<sup>Optional</sup> <a name="VipConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```go
func VipConfigInput() GkeonpremBareMetalAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput">ControlPlaneLoadBalancerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort">ControlPlaneLoadBalancerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneLoadBalancerPortInput`<sup>Optional</sup> <a name="ControlPlaneLoadBalancerPortInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput"></a>

```go
func ControlPlaneLoadBalancerPortInput() *f64
```

- *Type:* *f64

---

##### `ControlPlaneLoadBalancerPort`<sup>Required</sup> <a name="ControlPlaneLoadBalancerPort" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort"></a>

```go
func ControlPlaneLoadBalancerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterLoadBalancerPortConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">ControlPlaneVipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneVipInput`<sup>Optional</sup> <a name="ControlPlaneVipInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```go
func ControlPlaneVipInput() *string
```

- *Type:* *string

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```go
func ControlPlaneVip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---


### GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference <a name="GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput">MaintenanceAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks">MaintenanceAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceAddressCidrBlocksInput`<sup>Optional</sup> <a name="MaintenanceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput"></a>

```go
func MaintenanceAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaintenanceAddressCidrBlocks`<sup>Required</sup> <a name="MaintenanceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks"></a>

```go
func MaintenanceAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterMaintenanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---


### GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference <a name="GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput"></a>

```go
func PodAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput"></a>

```go
func ServiceAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks"></a>

```go
func PodAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks"></a>

```go
func ServiceAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---


### GkeonpremBareMetalAdminClusterNetworkConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr">PutIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr">ResetIslandModeCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIslandModeCidr` <a name="PutIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr"></a>

```go
func PutIslandModeCidr(value GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `ResetIslandModeCidr` <a name="ResetIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr"></a>

```go
func ResetIslandModeCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr">IslandModeCidr</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput">IslandModeCidrInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IslandModeCidr`<sup>Required</sup> <a name="IslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr"></a>

```go
func IslandModeCidr() GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a>

---

##### `IslandModeCidrInput`<sup>Optional</sup> <a name="IslandModeCidrInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput"></a>

```go
func IslandModeCidrInput() GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---


### GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser">ResetLoginUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginUser` <a name="ResetLoginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser"></a>

```go
func ResetLoginUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput">LoginUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser">LoginUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginUserInput`<sup>Optional</sup> <a name="LoginUserInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput"></a>

```go
func LoginUserInput() *string
```

- *Type:* *string

---

##### `LoginUser`<sup>Required</sup> <a name="LoginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser"></a>

```go
func LoginUser() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterNodeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---


### GkeonpremBareMetalAdminClusterNodeConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNodeConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```go
func ResetMaxPodsPerNode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---


### GkeonpremBareMetalAdminClusterProxyOutputReference <a name="GkeonpremBareMetalAdminClusterProxyOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy">ResetNoProxy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoProxy` <a name="ResetNoProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy"></a>

```go
func ResetNoProxy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput">NoProxyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy">NoProxy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoProxyInput`<sup>Optional</sup> <a name="NoProxyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput"></a>

```go
func NoProxyInput() *[]*string
```

- *Type:* *[]*string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `NoProxy`<sup>Required</sup> <a name="NoProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy"></a>

```go
func NoProxy() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterProxy
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers"></a>

```go
func PutAdminUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers"></a>

```go
func AdminUsers() GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput"></a>

```go
func AdminUsersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterSecurityConfigAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---


### GkeonpremBareMetalAdminClusterSecurityConfigOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization"></a>

```go
func PutAuthorization(value GkeonpremBareMetalAdminClusterSecurityConfigAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization"></a>

```go
func Authorization() GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() GkeonpremBareMetalAdminClusterSecurityConfigAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---


### GkeonpremBareMetalAdminClusterStatusConditionsList <a name="GkeonpremBareMetalAdminClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterStatusConditionsOutputReference <a name="GkeonpremBareMetalAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions">GkeonpremBareMetalAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions">GkeonpremBareMetalAdminClusterStatusConditions</a>

---


### GkeonpremBareMetalAdminClusterStatusList <a name="GkeonpremBareMetalAdminClusterStatusList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterStatusOutputReference <a name="GkeonpremBareMetalAdminClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList">GkeonpremBareMetalAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus">GkeonpremBareMetalAdminClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions"></a>

```go
func Conditions() GkeonpremBareMetalAdminClusterStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList">GkeonpremBareMetalAdminClusterStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus">GkeonpremBareMetalAdminClusterStatus</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig">PutLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount">ResetSharedPathPvCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLvpConfig` <a name="PutLvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig"></a>

```go
func PutLvpConfig(value GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `ResetSharedPathPvCount` <a name="ResetSharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount"></a>

```go
func ResetSharedPathPvCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig">LvpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput">LvpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput">SharedPathPvCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount">SharedPathPvCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LvpConfig`<sup>Required</sup> <a name="LvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig"></a>

```go
func LvpConfig() GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a>

---

##### `LvpConfigInput`<sup>Optional</sup> <a name="LvpConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput"></a>

```go
func LvpConfigInput() GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `SharedPathPvCountInput`<sup>Optional</sup> <a name="SharedPathPvCountInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput"></a>

```go
func SharedPathPvCountInput() *f64
```

- *Type:* *f64

---

##### `SharedPathPvCount`<sup>Required</sup> <a name="SharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount"></a>

```go
func SharedPathPvCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStorageLvpShareConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageOutputReference <a name="GkeonpremBareMetalAdminClusterStorageOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig">PutLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig">PutLvpShareConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLvpNodeMountsConfig` <a name="PutLvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig"></a>

```go
func PutLvpNodeMountsConfig(value GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `PutLvpShareConfig` <a name="PutLvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig"></a>

```go
func PutLvpShareConfig(value GkeonpremBareMetalAdminClusterStorageLvpShareConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig">LvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig">LvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput">LvpNodeMountsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput">LvpShareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LvpNodeMountsConfig`<sup>Required</sup> <a name="LvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig"></a>

```go
func LvpNodeMountsConfig() GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a>

---

##### `LvpShareConfig`<sup>Required</sup> <a name="LvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig"></a>

```go
func LvpShareConfig() GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a>

---

##### `LvpNodeMountsConfigInput`<sup>Optional</sup> <a name="LvpNodeMountsConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput"></a>

```go
func LvpNodeMountsConfigInput() GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `LvpShareConfigInput`<sup>Optional</sup> <a name="LvpShareConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput"></a>

```go
func LvpShareConfigInput() GkeonpremBareMetalAdminClusterStorageLvpShareConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---


### GkeonpremBareMetalAdminClusterTimeoutsOutputReference <a name="GkeonpremBareMetalAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremBareMetalAdminClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremBareMetalAdminClusterValidationCheckList <a name="GkeonpremBareMetalAdminClusterValidationCheckList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterValidationCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterValidationCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterValidationCheckOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterValidationCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario">Scenario</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList">GkeonpremBareMetalAdminClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck">GkeonpremBareMetalAdminClusterValidationCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Scenario`<sup>Required</sup> <a name="Scenario" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario"></a>

```go
func Scenario() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status"></a>

```go
func Status() GkeonpremBareMetalAdminClusterValidationCheckStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList">GkeonpremBareMetalAdminClusterValidationCheckStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterValidationCheck
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck">GkeonpremBareMetalAdminClusterValidationCheck</a>

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusList <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterValidationCheckStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result">Result</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus">GkeonpremBareMetalAdminClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result"></a>

```go
func Result() GkeonpremBareMetalAdminClusterValidationCheckStatusResultList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterValidationCheckStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus">GkeonpremBareMetalAdminClusterValidationCheckStatus</a>

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusResultList <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResultList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckStatusResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremBareMetalAdminClusterValidationCheckStatusResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get"></a>

```go
func Get(index *f64) GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/gkeonprembaremetaladmincluster"

gkeonprembaremetaladmincluster.NewGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult">GkeonpremBareMetalAdminClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremBareMetalAdminClusterValidationCheckStatusResult
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult">GkeonpremBareMetalAdminClusterValidationCheckStatusResult</a>

---



